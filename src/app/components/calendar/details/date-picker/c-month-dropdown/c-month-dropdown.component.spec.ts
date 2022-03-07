import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMonthDropdownComponent } from './c-month-dropdown.component';

describe('CMonthDropdownComponent', () => {
  let component: CMonthDropdownComponent;
  let fixture: ComponentFixture<CMonthDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CMonthDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CMonthDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
