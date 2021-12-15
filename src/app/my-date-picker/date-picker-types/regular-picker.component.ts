import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment';
import { CustomDateAdapter } from 'src/app/custom-date-adapter';

export const YEAR_MODE_FORMATS = {
  parse: {
    dateInput: 'DD.MM.YYYY',
  },
  display: {
    dateInput: 'DD.MM.YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MM Y',
  },
};

@Component({
  selector: 'app-regular-picker',
  template: `
    <input [matDatepicker]="picker" placeholder="{{'DATEPICKER.PLACEHOLDER1' | translate}}" [formControl]="_date" (dateChange)="onDateChange($event)">
    <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-datepicker #picker></mat-datepicker>
  `,
  styleUrls: ['./custom-style.scss'],
  providers: [
    { provide: DateAdapter, useClass: CustomDateAdapter, deps: [MAT_DATE_LOCALE], },
    { provide: MAT_DATE_FORMATS, useValue: YEAR_MODE_FORMATS },
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RegularPickerComponent), multi: true, },
  ]
})
export class RegularPickerComponent implements OnInit {

  _date = new FormControl();
  @Input() set date(value: string|undefined) {
    this._date.setValue(moment(value, 'DD.MM.YYYY'));
  }
  get date(): any {
    return this._date;
  };

  @Output() selectedDate = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onDateChange($event: MatDatepickerInputEvent<Date>) {
    this.selectedDate.emit($event.value);
  }

}
