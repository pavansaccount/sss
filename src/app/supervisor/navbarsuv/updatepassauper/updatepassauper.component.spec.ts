import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepassauperComponent } from './updatepassauper.component';

describe('UpdatepassauperComponent', () => {
  let component: UpdatepassauperComponent;
  let fixture: ComponentFixture<UpdatepassauperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatepassauperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatepassauperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
