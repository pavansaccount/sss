import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StucreateComponent } from './stucreate.component';

describe('StucreateComponent', () => {
  let component: StucreateComponent;
  let fixture: ComponentFixture<StucreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StucreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StucreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
