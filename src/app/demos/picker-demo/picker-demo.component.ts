import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { IMyDatePickerOutput, IMyDateRange } from 'src/app/components/my-date-picker/date-picker.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-picker-demo',
  templateUrl: './picker-demo.component.html',
  styleUrls: ['./picker-demo.component.scss']
})
export class PickerDemoComponent implements OnInit {

  title = 'custom-calendar';
  langControl = new FormControl(environment.defaultLang);
  langs = [ 'kk', 'ru', 'en' ];
  range: IMyDateRange = {
    start: moment().startOf('month'),
    end: moment(),
  };

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(environment.defaultLang);
    localStorage.setItem('curLangMoment', environment.defaultLang);
  }

  ngOnInit(): void {
  }

  onSelectChange($event: MatSelectChange) {
    this.translate.use($event.value);
    localStorage.setItem('curLangMoment', $event.value);
  }

  getDate($event: IMyDatePickerOutput) {
    this.range = $event.range;
    console.log(moment(this.range.start).format('YYYY-MM-DD'), moment(this.range.end).format('YYYY-MM-DD'));
    console.log($event);
  }

}
