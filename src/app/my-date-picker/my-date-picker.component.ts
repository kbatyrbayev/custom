import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TotalDatePickerComponent } from './total-date-picker/total-date-picker.component';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DefaultDatePickerComponent } from './default-date-picker/default-date-picker.component';
import { IMyDatePickerOutput, IMyDateRange, ITotalDateClose, TotalRadioType } from './date-picker.interface';
import * as moment from 'moment';
@Component({
  selector: 'app-my-date-picker',
  templateUrl: './my-date-picker.component.html',
  styleUrls: ['./my-date-picker.component.scss'],
})
export class MyDatePickerComponent implements OnInit {

  @Input() pickerType: 'default' | 'total' = 'default';
  @Input() radioType: TotalRadioType = 'day';
  @Input() range?: IMyDateRange;
  @Output() outputDate = new EventEmitter<IMyDatePickerOutput>();

  myRange = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  oldRange= new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });;
  radio: TotalRadioType = this.radioType;
  oldRadio: TotalRadioType = this.radioType;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    // Если период не задан через @Input(), то задаем период текущий день
    if (!this.range) {
      this.range = {
        start: moment(),
        end: moment(),
      }
    }
    this.myRange.setValue(this.range);
    this.oldRange?.setValue(this.range);
  }

  openCalendar($event: MouseEvent) {
    // calculate position of mat dialog
    const dialogHeight = 440;
    const dialogWidth = 275;
    const target: ElementRef = new ElementRef($event.currentTarget);
    const rect = target.nativeElement.getBoundingClientRect();
    let top = rect.bottom;
    let left = rect.left;
    
    if (rect.left+dialogWidth > window.innerWidth) {
      left = rect.right - dialogWidth;
    }
    if (rect.bottom+dialogHeight > window.innerHeight) {
      top = rect.bottom - (rect.bottom + dialogHeight - window.innerHeight) - 10;
    }

    const component = this.pickerType === 'total' ? TotalDatePickerComponent : DefaultDatePickerComponent;
    
    this.dialog.open(component, {
      position: {
        left: `${left}px`,
        top: `${top}px`,
      },
      data: { range: this.myRange, radio: this.radio }
    }).afterClosed().subscribe((res: ITotalDateClose) => {
      if (res) {
        const start = res.range.get('start');
        const end = res.range.get('end');
        switch (res.radio) {
          case 'day':
            end?.setValue(start?.value);
            break;
          case 'month':
            start?.setValue(moment(start!.value).startOf('month'));
            end?.setValue(moment(start!.value).endOf('month'));
            break;
          case 'year':
            start?.setValue(moment(start!.value).startOf('year'));
            end?.setValue(moment(start!.value).endOf('year'));
            break;
        }
        this.myRange.setValue(res.range.value);
        this.radio = res.radio;
        this.oldRange.setValue(res.range.value);
        this.oldRadio = res.radio;
        this.outputDate.emit({
          range: res.range.value,
          radio: res.radio,
          display: res.display!
        });
      } else {
        this.myRange.setValue(this.oldRange?.value);
        this.radio = this.oldRadio;
      }
    });
  }

}
