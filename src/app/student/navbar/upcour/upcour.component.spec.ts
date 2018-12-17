import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcourComponent } from './upcour.component';

describe('UpcourComponent', () => {
  let component: UpcourComponent;
  let fixture: ComponentFixture<UpcourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
