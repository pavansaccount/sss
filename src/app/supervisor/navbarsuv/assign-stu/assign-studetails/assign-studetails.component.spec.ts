import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignStudetailsComponent } from './assign-studetails.component';

describe('AssignStudetailsComponent', () => {
  let component: AssignStudetailsComponent;
  let fixture: ComponentFixture<AssignStudetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignStudetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignStudetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
