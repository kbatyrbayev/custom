import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatRadioChange } from '@angular/material/radio';
import { MatSelectChange } from '@angular/material/select';
import * as moment from 'moment';
import { TotalDatePickerComponent } from './total-date-picker/total-date-picker.component';
@Component({
  selector: 'app-my-date-picker',
  templateUrl: './my-date-picker.component.html',
  styleUrls: ['./my-date-picker.component.scss'],
})
export class MyDatePickerComponent implements OnInit {

  @Input() range?: IMyDateRange;
  @Output() outputDate = new EventEmitter<IMyDateRange>();

  
  dateControl = new FormControl(moment());
  startDate?: string;
  endDate?: string;

  constructor(public dialog: MatDialog) {
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

  openCalendar($event: MouseEvent) {
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
      }
    });
  }

  


  onDateChange($event: any) {
    console.log($event);
  }

}

export interface IMyDateRange {
  start: string;
  end: string;
}
