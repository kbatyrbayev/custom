import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
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

  @Input() range!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
