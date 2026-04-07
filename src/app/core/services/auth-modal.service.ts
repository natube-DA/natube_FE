import { Injectable, signal } from '@angular/core';
import { AuthIntent, AuthMode } from './auth.service';

export interface AuthModalState {
  readonly isOpen: boolean;
  readonly mode: AuthMode;
  readonly title: string;
  readonly description: string;
}

const DEFAULT_MODAL_STATE: AuthModalState = {
  isOpen: false,
  mode: 'signin',
  title: 'Welcome back',
  description: 'Sign in to continue your cinematic journey.'
};

@Injectable({ providedIn: 'root' })
export class AuthModalService {
  readonly state = signal<AuthModalState>(DEFAULT_MODAL_STATE);

  open(options?: Partial<Omit<AuthModalState, 'isOpen'>>): void {
    this.state.set({
      isOpen: true,
      mode: options?.mode ?? 'signin',
      title: options?.title ?? DEFAULT_MODAL_STATE.title,
      description: options?.description ?? DEFAULT_MODAL_STATE.description
    });
  }

  openForIntent(intent: AuthIntent): void {
    this.open({
      mode: intent.preferredMode ?? 'signin',
      title: intent.title,
      description: intent.description
    });
  }

  switchMode(mode: AuthMode): void {
    this.state.update((value) => ({ ...value, mode }));
  }

  close(): void {
    this.state.set(DEFAULT_MODAL_STATE);
  }
}
