import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IMyDateRange, ITotalDateClose, TotalRadioType } from '../date-picker-interface';

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

  radioControl = new FormControl('period');
  displayTypeControl = new FormControl('day');

  regularDate?: string;

  constructor(public dialogRef: MatDialogRef<TotalDatePickerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {range: FormGroup, radio: TotalRadioType}) {
    this.radioControl.setValue(this.data.radio);
  }

  ngOnInit(): void {
  }

  get start() {
    return this.data.range.get('start') as FormControl;
  }

  getRegularPicker($event: moment.Moment) {
    this.regularDate = $event.format('DD.MM.YYYY');
  }
  
  apply() {
    const res:ITotalDateClose = {
      range: this.data.range,
      radio: this.radioControl.value,
      display: this.displayTypeControl.value
    };
    this.dialogRef?.close(res);
  }

  close() {
    this.dialogRef?.close();
  }

}

