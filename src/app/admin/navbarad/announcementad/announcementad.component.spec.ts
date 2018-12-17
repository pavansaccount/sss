import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementadComponent } from './announcementad.component';

describe('AnnouncementadComponent', () => {
  let component: AnnouncementadComponent;
  let fixture: ComponentFixture<AnnouncementadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnouncementadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
