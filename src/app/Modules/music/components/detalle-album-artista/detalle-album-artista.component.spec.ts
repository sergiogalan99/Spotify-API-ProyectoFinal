import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAlbumArtistaComponent } from './detalle-album-artista.component';

describe('DetalleAlbumArtistaComponent', () => {
  let component: DetalleAlbumArtistaComponent;
  let fixture: ComponentFixture<DetalleAlbumArtistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleAlbumArtistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAlbumArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
