import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatData'
})
export class FormatDataPipe implements PipeTransform {
  // -------- Pipe format data + ...
  transform(value: string, start: number, end: number): any {
    return value.substr(start, end) + '...';
  }

}
