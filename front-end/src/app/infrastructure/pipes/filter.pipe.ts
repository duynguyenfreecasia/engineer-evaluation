import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(items: any[], filters: any) {
    if (!items || !filters) {
      return items;
    }
    return items.filter(item =>
      Object.keys(filters).every(filterKey => {
        const filterValue = filters[filterKey];
        if (Array.isArray(filterValue)) {
          return filterValue.includes(item[filterKey]);
        }
        return item[filterKey] === filters[filterKey];
      })
    );
  }
}
