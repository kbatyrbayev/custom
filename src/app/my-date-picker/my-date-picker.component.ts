import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-date-picker',
  templateUrl: './my-date-picker.component.html',
  styleUrls: ['./my-date-picker.component.scss']
})
export class MyDatePickerComponent implements OnInit {

  group = [
    { name: 'Сегодня', value: 'day' },
    { name: 'Месяц', value: 'month' },
    { name: 'Год', value: 'year' },
    { name: 'Период', value: 'period' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
