import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/shared/services/spotify.service';

@Component({
  selector: 'app-playlist-categoria',
  templateUrl: './playlist-categoria.component.html',
  styleUrls: ['./playlist-categoria.component.scss']
})
export class PlaylistCategoriaComponent implements OnInit {
  arrayTracksPlayList = [];
  itemsArray: any[] = [];
  arrayPlayListCategoria = [];
  trackBoolean = false;
  categoria: { nombre: string };
  constructor(private rutaActiva: ActivatedRoute, private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.getNombreId();
    this.getPlayListCategory();
  }
  getNombreId() {
    this.categoria = {
      nombre: this.rutaActiva.snapshot.params.id,
    };
  }

  getPlayListCategory() {
    this.spotifyService.getExploracionUnicaCategorias(this.categoria.nombre).subscribe(res => {
      this.arrayPlayListCategoria = res;
    });
  }

  viewTrackPlayList(id: string) {
    this.spotifyService.getTrackPlayList(id).subscribe(res => {
      this.arrayTracksPlayList = res;
      this.arrayTracksPlayList.forEach(element => {
        this.itemsArray.push(element.track);
      });
      this.trackBoolean = true;
    });
  }

}
