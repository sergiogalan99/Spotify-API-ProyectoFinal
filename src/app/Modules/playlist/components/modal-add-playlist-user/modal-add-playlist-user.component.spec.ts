import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddPlaylistUserComponent } from './modal-add-playlist-user.component';

describe('ModalAddPlaylistUserComponent', () => {
  let component: ModalAddPlaylistUserComponent;
  let fixture: ComponentFixture<ModalAddPlaylistUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddPlaylistUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddPlaylistUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
