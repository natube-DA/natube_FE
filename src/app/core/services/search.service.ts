import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SearchService {
  readonly query = signal('');

  updateQuery(value: string): void {
    this.query.set(value.trimStart());
  }

  clear(): void {
    this.query.set('');
  }
}
