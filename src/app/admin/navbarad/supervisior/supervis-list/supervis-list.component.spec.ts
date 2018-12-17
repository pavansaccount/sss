import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisListComponent } from './supervis-list.component';

describe('SupervisListComponent', () => {
  let component: SupervisListComponent;
  let fixture: ComponentFixture<SupervisListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
