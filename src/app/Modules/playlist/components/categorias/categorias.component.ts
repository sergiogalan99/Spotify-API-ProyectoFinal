import { SpotifyService } from 'src/app/shared/services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {
  arrayCategorias = [];
  constructor(private spotifyService:SpotifyService) { }

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias(){
    this.spotifyService.getCategorias().subscribe(res => {
      this.arrayCategorias = res;
    })
  }
}
