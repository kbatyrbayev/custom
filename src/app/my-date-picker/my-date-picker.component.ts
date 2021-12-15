import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MatDateFormats, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatRadioChange } from '@angular/material/radio';
import { MatSelectChange } from '@angular/material/select';
import * as moment from 'moment';
import { DateTimeService } from '../date-time.service';

const MOMENT_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'DD.MM.YYYY',
  },
  display: {
    dateInput: 'DD.MM.YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  }
};
@Component({
  selector: 'app-my-date-picker',
  templateUrl: './my-date-picker.component.html',
  styleUrls: ['./my-date-picker.component.scss'],
  /* providers: [
    {
      provide: MAT_DATE_FORMATS, useValue: MOMENT_DATE_FORMATS
    },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    }
  ] */
})
export class MyDatePickerComponent implements OnInit {

  radioControl = new FormControl('period');
  displayTypeControl = new FormControl();
  dateControl = new FormControl(moment());

  group = [
    { name: 'Сегодня', value: 'day', label: 'dd.mm.yyyy' },
    { name: 'Месяц', value: 'month', label: 'mm.yyyy' },
    { name: 'Год', value: 'year', label: 'yyyy' },
    { name: 'Период', value: 'period', label: 'dd.mm.yyyy - dd.mm.yyyy' },
  ];
  displayTypes = [
    { name: 'День', value: 'day' },
    { name: 'Месяц', value: 'month' },
    { name: 'Год', value: 'year' },
  ]

  startview: 'month' | 'year' | 'multi-year' = 'year';

  constructor(private dateTimeService: DateTimeService,
    @Inject(MAT_DATE_FORMATS) public data: MatDateFormats) {
  }

  ngOnInit(): void {
  }

  onRadioChange($event: MatRadioChange) {
    switch($event.value) {
      case 'day': 
        this.data = {
          parse: {
            dateInput: 'DD.MM.YYYY',
          },
          display: {
            dateInput: 'DD.MM.YYYY',
            monthYearLabel: 'MMM YYYY',
            dateA11yLabel: 'LL',
            monthYearA11yLabel: 'MMMM YYYY',
          }
        };
        this.startview = 'month';
      break;
      case 'month':
        this.data.parse.dateInput = 'MM.YYYY';
        this.data.display.dateInput = 'MM.YYYY';
        this.data.display.monthYearLabel = 'MMM YYYY';
        this.data.display.dateA11yLabel = 'LL';
        this.data.display.monthYearA11yLabel = 'MMMM YYYY';
/*         this.data = {
          parse: {
            dateInput: 'MM/YYYY',
          },
          display: {
            dateInput: 'MM/YYYY',
            monthYearLabel: 'MMM YYYY',
            dateA11yLabel: 'LL',
            monthYearA11yLabel: 'MMMM YYYY',
          }
        } */
        this.startview = 'multi-year';
        break;
      case 'year': 
        this.data = {
          parse: {
            dateInput: 'YYYY',
          },
          display: {
            dateInput: 'YYYY',
            monthYearLabel: 'MMM YYYY',
            dateA11yLabel: 'LL',
            monthYearA11yLabel: 'MMMM YYYY',
          }
        };
        this.startview = 'multi-year';
        break;
      case 'period': this.startview = 'year'; break;
    }
    console.log(this.data);
    
  }

  onSelectChange($event: MatSelectChange) {
    console.log($event);
  }

  onDateChange($event: any) {
    console.log($event);
  }

}
