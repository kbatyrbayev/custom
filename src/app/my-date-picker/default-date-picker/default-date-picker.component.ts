import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ITotalDateClose, TotalRadioType } from '../date-picker.interface';

@Component({
  selector: 'app-default-date-picker',
  templateUrl: './default-date-picker.component.html',
  styleUrls: ['./default-date-picker.component.scss']
})
export class DefaultDatePickerComponent implements OnInit {

  group = [
    { name: 'Сегодня', value: 'day', label: 'dd.mm.yyyy' },
    { name: 'Месяц', value: 'month', label: 'mm.yyyy' },
    { name: 'Год', value: 'year', label: 'yyyy' },
    { name: 'Период', value: 'period', label: 'dd.mm.yyyy - dd.mm.yyyy' },
  ];

  radioControl = new FormControl('period');

  constructor(public dialogRef: MatDialogRef<DefaultDatePickerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {range: FormGroup, radio: TotalRadioType}) {
      this.radioControl.setValue(this.data.radio);
  }

  ngOnInit(): void {
  }

  get start() {
    return this.data.range.get('start') as FormControl;
  }

  apply() {
    const res:ITotalDateClose = {
      range: this.data.range,
      radio: this.radioControl.value,
    };
    this.dialogRef?.close(res);
  }

  close() {
    this.dialogRef?.close();
  }

}
