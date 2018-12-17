import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsupproComponent } from './editsuppro.component';

describe('EditsupproComponent', () => {
  let component: EditsupproComponent;
  let fixture: ComponentFixture<EditsupproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditsupproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsupproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
