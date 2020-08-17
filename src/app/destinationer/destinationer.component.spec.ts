import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationerComponent } from './destinationer.component';

describe('DestinationerComponent', () => {
  let component: DestinationerComponent;
  let fixture: ComponentFixture<DestinationerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
