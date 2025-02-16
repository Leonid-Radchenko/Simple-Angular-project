import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitCharacters',
  standalone: true
})
export class LimitCharactersPipe implements PipeTransform {
  transform(value: string, limit: number = 35): string {
    if (!value) return '';
    return value.length > limit ? value.slice(0, limit) + '...' : value;
  }
}
