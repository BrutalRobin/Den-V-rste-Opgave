import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaerelseComponent } from './vaerelse.component';

describe('VaerelseComponent', () => {
  let component: VaerelseComponent;
  let fixture: ComponentFixture<VaerelseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaerelseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaerelseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
