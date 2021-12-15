import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { IMyDateRange } from './my-date-picker/my-date-picker.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'custom-calendar';
  langControl = new FormControl(environment.defaultLang);
  langs = [ 'kk', 'ru', 'en' ];
  range: IMyDateRange = {
    start: moment().startOf('month').format('DD.MM.YYYY'),
    end: moment().format('DD.MM.YYYY'),
  };

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(environment.defaultLang);
    localStorage.setItem('curLangMoment', environment.defaultLang);
  }

  onSelectChange($event: MatSelectChange) {
    this.translate.use($event.value);
    localStorage.setItem('curLangMoment', $event.value);
  }

  getDate($event: IMyDateRange) {
    console.log($event, 'get date');
    
  }
}
