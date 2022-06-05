import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingUpdatesComponent } from './meeting-updates.component';

describe('MeetingUpdatesComponent', () => {
  let component: MeetingUpdatesComponent;
  let fixture: ComponentFixture<MeetingUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingUpdatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
