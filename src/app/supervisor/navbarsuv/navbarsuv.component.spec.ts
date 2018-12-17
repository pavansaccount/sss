import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarsuvComponent } from './navbarsuv.component';

describe('NavbarsuvComponent', () => {
  let component: NavbarsuvComponent;
  let fixture: ComponentFixture<NavbarsuvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarsuvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarsuvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
