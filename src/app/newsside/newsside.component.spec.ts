import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewssideComponent } from './newsside.component';

describe('NewssideComponent', () => {
  let component: NewssideComponent;
  let fixture: ComponentFixture<NewssideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewssideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewssideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
