import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaerelseTypeComponent } from './vaerelse-type.component';

describe('VaerelseTypeComponent', () => {
  let component: VaerelseTypeComponent;
  let fixture: ComponentFixture<VaerelseTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaerelseTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaerelseTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
