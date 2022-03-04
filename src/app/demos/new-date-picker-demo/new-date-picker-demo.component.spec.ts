import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDatePickerDemoComponent } from './new-date-picker-demo.component';

describe('NewDatePickerDemoComponent', () => {
  let component: NewDatePickerDemoComponent;
  let fixture: ComponentFixture<NewDatePickerDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDatePickerDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDatePickerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
