import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterData'
})
export class FilterDataPipe implements PipeTransform {

  transform(value: any, id: string , name: string , status: string): any {
    if ( !id && !name && !status){
      return value;
    }
    else {
      if (id){
        value = value.filter(item => {
            return item.id.toString().indexOf(id) !== -1;
        });
      }
      if (name){
        value =  value.filter(item => {
          return item.name.toLowerCase().indexOf(name) !== -1;
        });
      }
      if (status){
        return value.filter(item => item.status.toString() === status);
      }
      return value;
    }

  }

}
