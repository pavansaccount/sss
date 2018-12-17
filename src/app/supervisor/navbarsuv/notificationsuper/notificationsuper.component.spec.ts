import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsuperComponent } from './notificationsuper.component';

describe('NotificationsuperComponent', () => {
  let component: NotificationsuperComponent;
  let fixture: ComponentFixture<NotificationsuperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationsuperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsuperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
