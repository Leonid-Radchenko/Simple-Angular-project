import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ 
  name: 'reviewCount',
  standalone: true
})
export class ReviewCountPipe implements PipeTransform {
  transform(count: number | undefined): string {
    if (!count) return 'no reviews';
    if (count === 1) return '1 review';
    return `${count} reviews`;
  }
}