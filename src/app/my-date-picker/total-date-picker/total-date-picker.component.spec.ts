import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalDatePickerComponent } from './total-date-picker.component';

describe('TotalDatePickerComponent', () => {
  let component: TotalDatePickerComponent;
  let fixture: ComponentFixture<TotalDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalDatePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
