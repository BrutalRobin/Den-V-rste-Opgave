import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResualtComponent } from './search-resualt.component';

describe('SearchResualtComponent', () => {
  let component: SearchResualtComponent;
  let fixture: ComponentFixture<SearchResualtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResualtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResualtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
