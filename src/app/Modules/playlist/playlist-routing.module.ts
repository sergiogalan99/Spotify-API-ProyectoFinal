import { MisPlaylistComponent } from './components/mis-playlist/mis-playlist.component';
import { PlaylistCategoriaComponent } from './components/playlist-categoria/playlist-categoria.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { PlaylistHomeComponent } from './playlist-home/playlist-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: PlaylistHomeComponent, children:
      [
        { path: '', component: CategoriasComponent },
        { path: 'playlist-categoria/:id', component: PlaylistCategoriaComponent },
        { path: 'mis-playlist', component: MisPlaylistComponent },

      ]
  },

]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistRoutingModule { }
