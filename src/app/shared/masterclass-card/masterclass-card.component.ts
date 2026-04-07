import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MasterclassModel } from '../../core/models/content.models';

@Component({
  selector: 'app-masterclass-card',
  standalone: true,
  templateUrl: './masterclass-card.component.html',
  styleUrl: './masterclass-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MasterclassCardComponent {
  @Input({ required: true }) item!: MasterclassModel;
}
