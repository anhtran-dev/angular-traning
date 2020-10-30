import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): any {
    // return value.toString().toUpperCase();
    // return value.toString().toLowerCase();
    value = value.trim();
    const arrStr = value.split('');
    let result = '';
    arrStr.forEach((str, index) => {
      result += str.charAt(0).toUpperCase() + str.substr(1) + '';
    });
    return result;
  }

}
