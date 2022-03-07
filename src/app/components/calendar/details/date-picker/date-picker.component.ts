import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ICDropdown } from './c-month-dropdown/c-month-dropdown.component';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  selected!: Date | null;

  monthes: ICDropdown[] = [
    { id: 1, name: 'Январь' },
    { id: 2, name: 'Февраль' },
    { id: 3, name: 'Март' },
    { id: 4, name: 'Апрель' },
    { id: 5, name: 'Май' },
    { id: 6, name: 'Июнь' },
    { id: 7, name: 'Июль' },
    { id: 8, name: 'Август' },
    { id: 9, name: 'Сентябрь' },
    { id: 10, name: 'Октябрь' },
    { id: 11, name: 'Ноябрь' },
    { id: 12, name: 'Декабрь' }
  ];
  curMonth = this.monthes.find(f => f.id === (new Date().getMonth()+1));

  years: ICDropdown[] = [
    {id:1, name: '2020'},
    {id:2, name: '2021'},
    {id:3, name: '2022'},
  ];
  curYear = this.years.find(f => +f.name === new Date().getFullYear());

  weekDays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

  constructor() { }

  ngOnInit(): void {
    let days = this.daysInMonth(+this.curYear?.name!, this.curMonth?.id!);
    console.log(days, 'days');

  }

  daysInMonth (year: number, month: number) {
    console.log(month, year);
    return new Date(year, month, 0).getDate();
  }


}
