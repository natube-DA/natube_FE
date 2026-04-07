import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { VideoCardModel } from '../../core/models/content.models';

@Component({
  selector: 'app-featured-video-card',
  standalone: true,
  templateUrl: './featured-video-card.component.html',
  styleUrl: './featured-video-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturedVideoCardComponent {
  @Input({ required: true }) item!: VideoCardModel;
}
