import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationerComponent } from './reservationer.component';

describe('ReservationerComponent', () => {
  let component: ReservationerComponent;
  let fixture: ComponentFixture<ReservationerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
