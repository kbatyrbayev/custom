import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { IMyDateRange } from './my-date-picker.component';

@Pipe({
  name: 'showDatePicker',
})
export class ShowDatePickerPipe implements PipeTransform {

  transform(value: IMyDateRange|undefined, radioType?: string): unknown {
    switch (radioType) {
      case 'day': return value?.start;
      case 'month': return this.transformMoment(value?.start).format('MM.YYYY');
      case 'year': return this.transformMoment(value?.start).format('YYYY');
      case 'period': return value?.start + '-' + value?.end;
      default: return value?.start + '-' + value?.end;
    }
  }

  transformMoment(value: string|undefined) {
    return moment(value, 'DD.MM.YYYY');
  }

}
