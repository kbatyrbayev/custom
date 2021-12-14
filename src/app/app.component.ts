import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom-calendar';
  langControl = new FormControl(environment.defaultLang);
  langs = [ 'kk', 'ru', 'en' ];

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(environment.defaultLang);
  }

  onSelectChange($event: MatSelectChange) {
    this.translate.use($event.value);
    localStorage.setItem('curLangMoment', $event.value);
  }
}
