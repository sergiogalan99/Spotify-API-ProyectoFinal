import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrackPlaylistUserComponent } from './add-track-playlist-user.component';

describe('AddTrackPlaylistUserComponent', () => {
  let component: AddTrackPlaylistUserComponent;
  let fixture: ComponentFixture<AddTrackPlaylistUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTrackPlaylistUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrackPlaylistUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
