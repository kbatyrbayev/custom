import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatRadioChange } from '@angular/material/radio';
import { MatSelectChange } from '@angular/material/select';
import { IMyDateRange } from '../my-date-picker.component';

@Component({
  selector: 'app-total-date-picker',
  templateUrl: './total-date-picker.component.html',
  styleUrls: ['./total-date-picker.component.scss']
})
export class TotalDatePickerComponent implements OnInit {

  @Input() range?: IMyDateRange;

  
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



  radioControl = new FormControl('day');
  get radioValue() {
    return this.radioControl.value;
  }
  displayTypeControl = new FormControl();

  regularDate?: string;

  constructor(public dialogRef: MatDialogRef<TotalDatePickerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  getRegularPicker($event: moment.Moment) {
    this.regularDate = $event.format('DD.MM.YYYY');
  }
  
  onRadioChange($event: MatRadioChange) {
    console.log($event);
  }

  onSelectChange($event: MatSelectChange) {
    console.log($event);
  }
  

  apply() {
    this.range!.start = this.regularDate!;
    this.dialogRef?.close();
  }
  

  close() {
    this.dialogRef?.close();
  }

}
