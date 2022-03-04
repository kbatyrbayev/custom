import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { CustomDateAdapter } from 'src/app/custom-date-adapter';

export const REGULAR_MODE_FORMATS = {
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
    <input [matDatepicker]="picker" placeholder="{{'DATEPICKER.PLACEHOLDER1' | translate}}" [formControl]="date">
    <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-datepicker #picker></mat-datepicker>
  `,
  styleUrls: ['./custom-style.scss'],
  providers: [
    { provide: DateAdapter, useClass: CustomDateAdapter, deps: [MAT_DATE_LOCALE], },
    { provide: MAT_DATE_FORMATS, useValue: REGULAR_MODE_FORMATS },
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RegularPickerComponent), multi: true, },
  ]
})
export class RegularPickerComponent implements OnInit {

  @Input() date!: FormControl;

  constructor() { }

  ngOnInit(): void {
  }

}
