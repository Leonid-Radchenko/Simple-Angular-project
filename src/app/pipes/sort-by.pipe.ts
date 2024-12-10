import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy',
  standalone: true
})
export class SortByPipe implements PipeTransform {
  transform(array: any[], field: string, order: 'asc' | 'desc' = 'asc'): any[] {
    if (!array || !field) return array;
    return array.sort((a, b) => {
      const compare = a[field] - b[field];
      return order === 'asc' ? compare : -compare;
    });
  }
}