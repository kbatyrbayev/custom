import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickerDemoComponent } from './picker-demo.component';

describe('PickerDemoComponent', () => {
  let component: PickerDemoComponent;
  let fixture: ComponentFixture<PickerDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickerDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
