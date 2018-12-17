import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationadComponent } from './notificationad.component';

describe('NotificationadComponent', () => {
  let component: NotificationadComponent;
  let fixture: ComponentFixture<NotificationadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
