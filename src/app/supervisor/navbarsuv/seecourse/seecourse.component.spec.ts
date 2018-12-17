import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeecourseComponent } from './seecourse.component';

describe('SeecourseComponent', () => {
  let component: SeecourseComponent;
  let fixture: ComponentFixture<SeecourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeecourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeecourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
