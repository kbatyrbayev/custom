import { Component, forwardRef, OnInit } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import * as moment from 'moment';
import { CustomDateAdapter } from 'src/app/custom-date-adapter';

export const YEAR_MODE_FORMATS = {
  parse: {
    dateInput: 'YYYY',
  },
  display: {
    dateInput: 'YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-year-picker',
  template: `
    <input [matDatepicker]="picker" placeholder="{{'DATEPICKER.PLACEHOLDER1' | translate}}" [formControl]="date" (change)="onDateChange($event)">
    <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-datepicker #picker startView="multi-year"  (yearSelected)="chosenYearHandler($event, picker)"></mat-datepicker>
  `,
  styleUrls: ['./custom-style.scss'],
  providers: [
    { provide: DateAdapter, useClass: CustomDateAdapter, deps: [MAT_DATE_LOCALE], },
    { provide: MAT_DATE_FORMATS, useValue: YEAR_MODE_FORMATS },
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => YearPickerComponent), multi: true, },
  ]
})
export class YearPickerComponent implements OnInit {

  date = new FormControl(moment());

  constructor() { }

  ngOnInit(): void {
  }

  onDateChange($event: any) {
    console.log($event);
  }

  chosenYearHandler(normalizedYear: moment.Moment, datepicker: MatDatepicker<moment.Moment>) {
    datepicker.close();
    const ctrlValue = this.date.value;
    ctrlValue.year(normalizedYear.year());
    this.date.setValue(ctrlValue);
  }

}
