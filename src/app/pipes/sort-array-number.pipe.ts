import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortArrayNumber'
})
export class SortArrayNumberPipe implements PipeTransform {

  transform(value: any[], sort: string ): any {
    if (sort === '') {
      return value;
    } else {
      // if (sort === 'increase') {
      //   value.sort((a, b) => {
      //     if (a > b) {
      //       return 1;
      //     } else if (a < b) {
      //       return -1;
      //     } else {
      //       return 0;
      //     }
      //   });
      //   return [...value];
      // }
      // if (sort === 'decrease') {
      //   value.sort((a, b) => {
      //     if (a > b) {
      //       return -1;
      //     } else if (a < b) {
      //       return 1;
      //     } else {
      //       return 0;
      //     }
      //   });
      //   return [...value];
      // }

        const result = value.sort((a, b) => {
          if ( a > b){
            return Number(sort);
          }
          else if (a < b ){
            return -Number(sort);
          }
          else {
            return 0;
          }
        });
        return [...result];
    }
  }

}
