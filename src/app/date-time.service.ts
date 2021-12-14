// date-time.service
import { Injectable } from '@angular/core';
import { MatDateFormats } from '@angular/material/core';

@Injectable({ providedIn: 'root' })
export class DateTimeService {
  private _format: MatDateFormats;

  public constructor() {
    this._format = {
      parse: {
        dateInput: 'MM.YYYY'
      },
      display: {
        dateInput: 'MM.YYYY',
        monthYearLabel: 'YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MM Y'
      }
    };
  }

  public get format(): MatDateFormats {
    return this._format;
  }

  public set format(value: MatDateFormats) {
    this._format = value;
  }

  public getFormat() {
    console.log(this.format, '------');
    return this.format;
  }

}