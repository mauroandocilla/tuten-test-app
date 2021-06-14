import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'searchFilter'
})

export class SearchFilterPipe implements PipeTransform {
  transform(data: any, keys?: any[], value?: any): any {
    if (!data) {
      return null;
    }

    if (!keys) {
      return data;
    }

    value = value.toLowerCase();
    return data.filter((item: any) => JSON.stringify(_.pick(item, keys)).includes(value));
  }
}
