import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatRadioChange } from '@angular/material/radio';
import { MatSelectChange } from '@angular/material/select';
import * as moment from 'moment';
@Component({
  selector: 'app-my-date-picker',
  templateUrl: './my-date-picker.component.html',
  styleUrls: ['./my-date-picker.component.scss'],
})
export class MyDatePickerComponent implements OnInit {

  @Input() range?: IMyDateRange;
  @Output() outputDate = new EventEmitter<IMyDateRange>();

  radioControl = new FormControl('day');
  displayTypeControl = new FormControl();
  dateControl = new FormControl(moment());
  startDate?: string;
  endDate?: string;

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
  ];

  @ViewChild('matMenuTrigger') matMenuTrigger?: MatMenuTrigger;

  constructor() {
  }

  ngOnInit(): void {
    // Если период не задан через @Input()
    if (!this.range) {
      this.range = {
        start: moment().format('DD.MM.YYYY'),
        end: moment().format('DD.MM.YYYY'),
      }
    }
  }

  regularDate?: string;
  getRegularPicker($event: moment.Moment) {
    this.regularDate = $event.format('DD.MM.YYYY');
  }

  apply() {
    this.range!.start = this.regularDate!;
    this.outputDate.emit(this.range);
    this.matMenuTrigger?.closeMenu();
  }

  close() {
    this.matMenuTrigger?.closeMenu();
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

export interface IMyDateRange {
  start: string;
  end: string;
}
