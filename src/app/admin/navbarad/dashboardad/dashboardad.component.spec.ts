import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardadComponent } from './dashboardad.component';

describe('DashboardadComponent', () => {
  let component: DashboardadComponent;
  let fixture: ComponentFixture<DashboardadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
