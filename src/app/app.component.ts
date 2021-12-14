import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom-calendar';
  langControl = new FormControl('kk');
  langs = [ 'kk', 'ru', 'en' ];

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('kk');
  }

  onSelectChange($event: MatSelectChange) {
    this.translate.use($event.value);
  }
}
