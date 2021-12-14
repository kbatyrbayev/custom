import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-my-date-picker',
  templateUrl: './my-date-picker.component.html',
  styleUrls: ['./my-date-picker.component.scss']
})
export class MyDatePickerComponent implements OnInit {

  radioControl = new FormControl('day');
  displayTypeControl = new FormControl();
  dateControl = new FormControl();

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

  startview: 'month' | 'year' | 'multi-year' = 'multi-year';

  constructor() { }

  ngOnInit(): void {
  }

  onRadioChange($event: MatRadioChange) {
    switch($event.value) {
      case 'day': this.startview = 'multi-year'; break;
      case 'month': this.startview = 'year'; break;
      case 'year': this.startview = 'month'; break;
      case 'period': this.startview = 'year'; break;
    }
  }

  onSelectChange($event: MatSelectChange) {
    console.log($event);
  }

  onDateChange($event: any) {
    console.log($event);
  }

}
