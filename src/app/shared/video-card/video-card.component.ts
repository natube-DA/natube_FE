import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { VideoCardModel } from '../../core/models/content.models';

@Component({
  selector: 'app-video-card',
  standalone: true,
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoCardComponent {
  @Input({ required: true }) item!: VideoCardModel;
}
