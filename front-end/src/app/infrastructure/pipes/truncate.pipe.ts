import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, args: string): string {
    const limit = args ? parseInt(args, 10) : 20;
    const trail = '...';

    return value && value.length > limit
      ? value.substring(0, limit) + trail
      : value;
  }
}