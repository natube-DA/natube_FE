import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ShortFilmModel } from '../../core/models/content.models';

@Component({
  selector: 'app-short-card',
  standalone: true,
  templateUrl: './short-card.component.html',
  styleUrl: './short-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShortCardComponent {
  @Input({ required: true }) item!: ShortFilmModel;
}
