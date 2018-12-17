import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqsupComponent } from './reqsup.component';

describe('ReqsupComponent', () => {
  let component: ReqsupComponent;
  let fixture: ComponentFixture<ReqsupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqsupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqsupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
