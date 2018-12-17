import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupcreateComponent } from './supcreate.component';

describe('SupcreateComponent', () => {
  let component: SupcreateComponent;
  let fixture: ComponentFixture<SupcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
