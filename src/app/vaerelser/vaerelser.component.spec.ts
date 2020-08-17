import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaerelserComponent } from './vaerelser.component';

describe('VaerelserComponent', () => {
  let component: VaerelserComponent;
  let fixture: ComponentFixture<VaerelserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaerelserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaerelserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
