import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfinScrollComponent } from './infin-scroll.component';

describe('InfinScrollComponent', () => {
  let component: InfinScrollComponent;
  let fixture: ComponentFixture<InfinScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfinScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfinScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
