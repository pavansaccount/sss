import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepasswordadminComponent } from './updatepasswordadmin.component';

describe('UpdatepasswordadminComponent', () => {
  let component: UpdatepasswordadminComponent;
  let fixture: ComponentFixture<UpdatepasswordadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatepasswordadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatepasswordadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
