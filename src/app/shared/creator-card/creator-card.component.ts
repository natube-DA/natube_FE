import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CreatorDiscoveryModel } from '../../core/models/content.models';

@Component({
  selector: 'app-creator-card',
  standalone: true,
  templateUrl: './creator-card.component.html',
  styleUrl: './creator-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreatorCardComponent {
  @Input({ required: true }) item!: CreatorDiscoveryModel;
}
