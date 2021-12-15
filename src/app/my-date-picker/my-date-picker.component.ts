import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { MatSelectChange } from '@angular/material/select';
import * as moment from 'moment';
@Component({
  selector: 'app-my-date-picker',
  templateUrl: './my-date-picker.component.html',
  styleUrls: ['./my-date-picker.component.scss'],
})
export class MyDatePickerComponent implements OnInit {

  radioControl = new FormControl('day');
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

  constructor() {
  }

  ngOnInit(): void {
  }

  onRadioChange($event: MatRadioChange) {
    console.log($event);
    
  }

  onSelectChange($event: MatSelectChange) {
    console.log($event);
  }

  onDateChange($event: any) {
    console.log($event);
  }

}
