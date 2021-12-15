import { Component, forwardRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
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
  selector: 'app-period-picker',
  template: `
  <div class="period-picker">
    <mat-date-range-input [rangePicker]="picker" [formGroup]="range">
      <input matStartDate placeholder="Start date" formControlName="start">
      <input matEndDate placeholder="End date" formControlName="end">
    </mat-date-range-input>
    <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-date-range-picker #picker></mat-date-range-picker>
  </div>
  `,
  styleUrls: ['./custom-style.scss'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: YEAR_MODE_FORMATS },
    { provide: DateAdapter, useClass: CustomDateAdapter },
  ]
})
export class PeriodPickerComponent implements OnInit {

  range = new FormGroup({
    start: new FormControl(moment()),
    end: new FormControl(moment())
  });

  constructor() { }

  ngOnInit(): void {
  }

  onDateChange($event: any) {
    console.log($event);
  }


}
