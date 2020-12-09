import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistCategoriaComponent } from './playlist-categoria.component';

describe('PlaylistCategoriaComponent', () => {
  let component: PlaylistCategoriaComponent;
  let fixture: ComponentFixture<PlaylistCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
