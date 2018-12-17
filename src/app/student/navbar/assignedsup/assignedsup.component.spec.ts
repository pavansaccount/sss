import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedsupComponent } from './assignedsup.component';

describe('AssignedsupComponent', () => {
  let component: AssignedsupComponent;
  let fixture: ComponentFixture<AssignedsupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedsupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedsupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
