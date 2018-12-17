import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisiorComponent } from './supervisior.component';

describe('SupervisiorComponent', () => {
  let component: SupervisiorComponent;
  let fixture: ComponentFixture<SupervisiorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisiorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
