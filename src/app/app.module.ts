import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MyDatePickerComponent } from './my-date-picker/my-date-picker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MonthPickerComponent } from './my-date-picker/date-picker-types/month-picker.component';
import { YearPickerComponent } from './my-date-picker/date-picker-types/year-picker.component';
import { RegularPickerComponent } from './my-date-picker/date-picker-types/regular-picker.component';
import { PeriodPickerComponent } from './my-date-picker/date-picker-types/period-picker.component';
import { MatMenuModule } from '@angular/material/menu';
import { ShowDatePickerPipe } from './my-date-picker/show-date-picker.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { TotalDatePickerComponent } from './my-date-picker/total-date-picker/total-date-picker.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MyDatePickerComponent,
    MonthPickerComponent,
    YearPickerComponent,
    RegularPickerComponent,
    PeriodPickerComponent,
    ShowDatePickerPipe,
    TotalDatePickerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatMenuModule,
    MatDialogModule,
    TranslateModule.forRoot(
      {
        loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
        }
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
