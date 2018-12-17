import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardsuvComponent } from './dashboardsuv.component';

describe('DashboardsuvComponent', () => {
  let component: DashboardsuvComponent;
  let fixture: ComponentFixture<DashboardsuvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardsuvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardsuvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
