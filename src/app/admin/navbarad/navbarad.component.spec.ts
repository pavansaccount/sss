import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbaradComponent } from './navbarad.component';

describe('NavbaradComponent', () => {
  let component: NavbaradComponent;
  let fixture: ComponentFixture<NavbaradComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbaradComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbaradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
