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
import { DefaultDatePickerComponent } from './my-date-picker/default-date-picker/default-date-picker.component';
import { InfinScrollComponent } from './infin-scroll/infin-scroll.component';
import { RouterModule, Routes } from '@angular/router';
import { PickerDemoComponent } from './demos/picker-demo/picker-demo.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NewDatePickerDemoComponent } from './demos/new-date-picker-demo/new-date-picker-demo.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const appRoutes: Routes = [
  { path: 'datePicker', component: PickerDemoComponent },
  { path: 'newDatePicker', component: NewDatePickerDemoComponent },
  { path: 'infin', component: InfinScrollComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MyDatePickerComponent,
    MonthPickerComponent,
    YearPickerComponent,
    RegularPickerComponent,
    PeriodPickerComponent,
    ShowDatePickerPipe,
    TotalDatePickerComponent,
    DefaultDatePickerComponent,
    InfinScrollComponent,
    PickerDemoComponent,
    NewDatePickerDemoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
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
    ),
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
