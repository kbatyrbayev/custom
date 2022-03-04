import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearPickerComponent2 } from './year-picker.component';

describe('YearPickerComponent2', () => {
  let component: YearPickerComponent2;
  let fixture: ComponentFixture<YearPickerComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearPickerComponent2 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearPickerComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
