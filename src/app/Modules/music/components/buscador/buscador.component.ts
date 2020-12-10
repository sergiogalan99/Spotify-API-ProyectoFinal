import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SpotifyService } from 'src/app/shared/services/spotify.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  seleccionada = '';
  arrayBusqueda: any[] = [];
  constructor(private spotify: SpotifyService) { }

  ngOnInit(): void {
  }


  buscarTermino(termino: string) {
    this.arrayBusqueda = [];
    if (termino.length > 0) {
      debounceTime(3000);
      distinctUntilChanged();
      this.spotify.getBusqueda(termino, this.seleccionada).subscribe((data: any) => {
        this.arrayBusqueda = data;
      });
    }
    if (termino.length == 0) {
      this.arrayBusqueda = [];
    }
  }
}
