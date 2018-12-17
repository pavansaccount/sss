import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisComponent } from './supervis.component';

describe('SupervisComponent', () => {
  let component: SupervisComponent;
  let fixture: ComponentFixture<SupervisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
