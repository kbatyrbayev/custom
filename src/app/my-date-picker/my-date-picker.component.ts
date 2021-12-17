import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITotalDateClose, TotalDatePickerComponent, TotalRadioType } from './total-date-picker/total-date-picker.component';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';
@Component({
  selector: 'app-my-date-picker',
  templateUrl: './my-date-picker.component.html',
  styleUrls: ['./my-date-picker.component.scss'],
})
export class MyDatePickerComponent implements OnInit {

  @Input() range?: IMyDateRange;
  @Output() outputDate = new EventEmitter<IMyDateRange>();

  myRange = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  oldRange= new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });;
  radio: TotalRadioType = 'period';
  oldRadio: TotalRadioType = 'period';

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
    console.log(this.oldRange?.value);
    
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
    
    this.dialog.open(TotalDatePickerComponent, {
      position: {
        left: `${left}px`,
        top: `${top}px`,
      },
      data: { range: this.myRange, radio: this.radio }
    }).afterClosed().subscribe((res: ITotalDateClose) => {
      if (res) {
        this.myRange.setValue(res.range.value);
        this.radio = res.radio;
        this.oldRange.setValue(res.range.value);
        this.oldRadio = res.radio;
      } else {
        this.myRange.setValue(this.oldRange?.value);
        this.radio = this.oldRadio;
      }
    });
  }

  onDateChange($event: any) {
    console.log($event);
  }

}

export interface IMyDateRange {
  start: moment.Moment;
  end: moment.Moment;
}
