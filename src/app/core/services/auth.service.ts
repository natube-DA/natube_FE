import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type AuthMode = 'signin' | 'signup';
export type AuthProvider = 'email' | 'google' | 'apple';
export type AuthIntentKind = 'upload' | 'notifications' | 'profile' | 'creator-tools';

export interface AuthIntent {
  readonly kind: AuthIntentKind;
  readonly title: string;
  readonly description: string;
  readonly redirectUrl?: string;
  readonly preferredMode?: AuthMode;
}

export interface AuthUser {
  readonly displayName: string;
  readonly email: string;
  readonly avatarUrl: string;
  readonly plan: 'Free' | 'Pro';
  readonly authProvider: AuthProvider;
  readonly isCreator: boolean;
  readonly unreadNotifications: number;
}

interface StoredSession {
  readonly accessToken: string;
  readonly creatorMode: boolean;
  readonly user: AuthUser;
}

const AUTH_SESSION_KEY = 'cinematic_curator_auth_session';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly initialSession = this.readInitialSession();
  private readonly accessToken = signal<string | null>(this.initialSession?.accessToken ?? null);

  readonly user = signal<AuthUser | null>(this.initialSession?.user ?? null);
  readonly creatorMode = signal(this.initialSession?.creatorMode ?? false);
  readonly pendingIntent = signal<AuthIntent | null>(null);

  readonly isAuthenticated = computed(() => Boolean(this.user()));
  readonly isCreator = computed(() => Boolean(this.user()?.isCreator));
  readonly role = computed<'guest' | 'viewer' | 'creator'>(() => {
    if (!this.isAuthenticated()) {
      return 'guest';
    }

    return this.creatorMode() && this.isCreator() ? 'creator' : 'viewer';
  });

  getAccessToken(): string | null {
    return this.accessToken();
  }

  signIn(email: string, password: string): AuthUser {
    const normalizedEmail = email.trim().toLowerCase();
    const displayName = normalizedEmail.split('@')[0].replace(/[._-]/g, ' ');

    const nextUser: AuthUser = {
      displayName: this.toDisplayName(displayName),
      email: normalizedEmail,
      avatarUrl: this.buildAvatarUrl(normalizedEmail),
      plan: 'Free',
      authProvider: 'email',
      isCreator: normalizedEmail.includes('creator'),
      unreadNotifications: 3
    };

    this.setSession({
      accessToken: this.createAccessToken(normalizedEmail, password.length),
      creatorMode: nextUser.isCreator,
      user: nextUser
    });

    return nextUser;
  }

  signUp(displayName: string, email: string, password: string): AuthUser {
    const normalizedEmail = email.trim().toLowerCase();
    const nextUser: AuthUser = {
      displayName: this.toDisplayName(displayName.trim() || normalizedEmail.split('@')[0]),
      email: normalizedEmail,
      avatarUrl: this.buildAvatarUrl(normalizedEmail),
      plan: 'Free',
      authProvider: 'email',
      isCreator: false,
      unreadNotifications: 1
    };

    this.setSession({
      accessToken: this.createAccessToken(normalizedEmail, password.length),
      creatorMode: false,
      user: nextUser
    });

    return nextUser;
  }

  continueWithProvider(provider: Exclude<AuthProvider, 'email'>): AuthUser {
    const nextUser: AuthUser = {
      displayName: provider === 'google' ? 'Google Creator' : 'Apple Curator',
      email: provider === 'google' ? 'creator.google@example.com' : 'curator.apple@example.com',
      avatarUrl: this.buildAvatarUrl(provider),
      plan: provider === 'google' ? 'Pro' : 'Free',
      authProvider: provider,
      isCreator: provider === 'google',
      unreadNotifications: provider === 'google' ? 5 : 2
    };

    this.setSession({
      accessToken: `${provider}-oauth-demo-token`,
      creatorMode: nextUser.isCreator,
      user: nextUser
    });

    return nextUser;
  }

  logout(): void {
    this.accessToken.set(null);
    this.user.set(null);
    this.creatorMode.set(false);
    this.pendingIntent.set(null);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(AUTH_SESSION_KEY);
    }
  }

  setPendingIntent(intent: AuthIntent | null): void {
    this.pendingIntent.set(intent);
  }

  consumePendingIntent(): AuthIntent | null {
    const intent = this.pendingIntent();
    this.pendingIntent.set(null);
    return intent;
  }

  enableCreatorMode(): void {
    const currentUser = this.user();

    if (!currentUser) {
      return;
    }

    const upgradedUser = currentUser.isCreator
      ? currentUser
      : {
          ...currentUser,
          isCreator: true,
          unreadNotifications: Math.max(currentUser.unreadNotifications, 2)
        };

    this.user.set(upgradedUser);
    this.creatorMode.set(true);
    this.persistSession();
  }

  setCreatorMode(value: boolean): void {
    if (!this.user()?.isCreator) {
      return;
    }

    this.creatorMode.set(value);
    this.persistSession();
  }

  private setSession(session: StoredSession): void {
    this.accessToken.set(session.accessToken);
    this.user.set(session.user);
    this.creatorMode.set(session.creatorMode);
    this.persistSession();
  }

  private persistSession(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const currentUser = this.user();
    const accessToken = this.accessToken();

    if (!currentUser || !accessToken) {
      localStorage.removeItem(AUTH_SESSION_KEY);
      return;
    }

    const snapshot: StoredSession = {
      accessToken,
      creatorMode: this.creatorMode(),
      user: currentUser
    };

    localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(snapshot));
  }

  private readInitialSession(): StoredSession | null {
    if (!isPlatformBrowser(this.platformId)) {
      return null;
    }

    const rawValue = localStorage.getItem(AUTH_SESSION_KEY);

    if (!rawValue) {
      return null;
    }

    try {
      return JSON.parse(rawValue) as StoredSession;
    } catch {
      localStorage.removeItem(AUTH_SESSION_KEY);
      return null;
    }
  }

  private createAccessToken(email: string, entropy: number): string {
    return `demo-${btoa(`${email}:${entropy}`)}`;
  }

  private buildAvatarUrl(seed: string): string {
    return `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(seed)}`;
  }

  private toDisplayName(value: string): string {
    return value
      .split(' ')
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
  }
}
