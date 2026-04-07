export interface CreatorSummary {
  readonly id: string;
  readonly name: string;
  readonly avatarUrl: string;
  readonly specialty: string;
}

export interface CreatorDiscoveryModel extends CreatorSummary {
  readonly category: string;
  readonly bio: string;
  readonly tagline: string;
  readonly followersLabel: string;
  readonly statusLabel?: string;
  readonly sampleThumbnails: readonly string[];
  readonly recentHighlight: string;
}

export interface VideoCardModel {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly duration: string;
  readonly thumbnailUrl: string;
  readonly creator: CreatorSummary;
  readonly description?: string;
  readonly badge?: string;
}

export interface MasterclassModel {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly thumbnailUrl: string;
  readonly creator: CreatorSummary;
  readonly lessonsCount: number;
  readonly label?: string;
}

export interface ShortFilmModel {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly thumbnailUrl: string;
}
