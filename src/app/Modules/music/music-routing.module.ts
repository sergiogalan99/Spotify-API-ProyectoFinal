import { BuscadorComponent } from './components/buscador/buscador.component';
import { DetalleAlbumArtistaComponent } from './components/detalle-album-artista/detalle-album-artista.component';
import { MusicHomeComponent } from './music-home/music-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: MusicHomeComponent, children:
      [
        { path: '', component: BuscadorComponent },
        { path: 'detalle-album-artista/:id', component: DetalleAlbumArtistaComponent },

      ]
  },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRoutingModule { }
