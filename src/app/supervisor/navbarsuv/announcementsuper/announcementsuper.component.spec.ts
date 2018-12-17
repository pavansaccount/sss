import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementsuperComponent } from './announcementsuper.component';

describe('AnnouncementsuperComponent', () => {
  let component: AnnouncementsuperComponent;
  let fixture: ComponentFixture<AnnouncementsuperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnouncementsuperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementsuperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
