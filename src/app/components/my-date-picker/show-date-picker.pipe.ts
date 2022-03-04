import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { IMyDateRange, TotalRadioType } from './date-picker.interface';

@Pipe({
  name: 'showDatePicker',
})
export class ShowDatePickerPipe implements PipeTransform {

  transform(value: IMyDateRange|undefined, radio: TotalRadioType): unknown {
    switch (radio) {
      case 'day':
        return this.transformMoment(value?.start);
      case 'month':
        return this.transformMoment(value?.start, 'MM.YYYY');
      case 'year':
        return this.transformMoment(value?.start, 'YYYY');
      default: 
        return `${this.transformMoment(value?.start)}-${this.transformMoment(value?.end)}`;
    }
  }

  transformMoment(value: moment.Moment|undefined, format = 'DD.MM.YYYY') {
    if (value) return moment(value, 'DD.MM.YYYY').format(format);
    return '';
  }

}
