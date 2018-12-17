import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckresComponent } from './checkres.component';

describe('CheckresComponent', () => {
  let component: CheckresComponent;
  let fixture: ComponentFixture<CheckresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
