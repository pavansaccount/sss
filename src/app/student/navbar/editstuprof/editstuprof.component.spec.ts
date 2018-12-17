import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditstuprofComponent } from './editstuprof.component';

describe('EditstuprofComponent', () => {
  let component: EditstuprofComponent;
  let fixture: ComponentFixture<EditstuprofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditstuprofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditstuprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
