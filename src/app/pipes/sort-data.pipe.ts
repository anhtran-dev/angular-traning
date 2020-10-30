import {Pipe, PipeTransform} from '@angular/core';
import 'lodash';
declare var _;
@Pipe({
    name: 'sortData'
})
export class SortDataPipe implements PipeTransform {

    transform(value: any[], sortBy: string, sortValue: number): unknown {
        if (sortBy === 'name') {
            // value.sort((a, b) => {
            //     if (a.name.toLowerCase() > b.name.toLowerCase()) {
            //         return sortValue;
            //     } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
            //         return -sortValue;
            //     } else {
            //         return 0;
            //     }
            // });
            value = _.orderBy(value , ['name'.toLowerCase()], [sortValue === 1 ? 'asc' : 'desc']);
        }
        if (sortBy === 'total') {
            // value.sort((a, b) => {
            //     if (a.total > b.total) {
            //         return sortValue;
            //     } else if (a.total < b.total) {
            //         return -sortValue;
            //     } else {
            //         return 0;
            //     }
            // });
          value = _.orderBy(value , ['total'], [sortValue === 1 ? 'asc' : 'desc']);
        }
        return value;
    }

}
