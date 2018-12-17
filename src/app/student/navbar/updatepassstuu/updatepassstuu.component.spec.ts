import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepassstuuComponent } from './updatepassstuu.component';

describe('UpdatepassstuuComponent', () => {
  let component: UpdatepassstuuComponent;
  let fixture: ComponentFixture<UpdatepassstuuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatepassstuuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatepassstuuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
