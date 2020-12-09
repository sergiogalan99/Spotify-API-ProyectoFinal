import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisPlaylistComponent } from './mis-playlist.component';

describe('MisPlaylistComponent', () => {
  let component: MisPlaylistComponent;
  let fixture: ComponentFixture<MisPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisPlaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
