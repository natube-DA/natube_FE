import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-upload-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './upload-page.component.html',
  styleUrl: './upload-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadPageComponent {}
