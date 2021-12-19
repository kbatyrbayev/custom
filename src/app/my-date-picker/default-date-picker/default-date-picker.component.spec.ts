import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultDatePickerComponent } from './default-date-picker.component';

describe('DefaultDatePickerComponent', () => {
  let component: DefaultDatePickerComponent;
  let fixture: ComponentFixture<DefaultDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultDatePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
