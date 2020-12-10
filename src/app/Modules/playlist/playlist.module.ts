import { NoImageDosPipe } from 'src/app/shared/pipes/no-image-dos.pipe';
import { PlaylistService } from './services/playlist.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistRoutingModule } from './playlist-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { PlaylistHomeComponent } from './playlist-home/playlist-home.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import {MatRadioModule} from '@angular/material/radio';
import { PlaylistCategoriaComponent } from './components/playlist-categoria/playlist-categoria.component';
import { MatSelectModule } from '@angular/material/select';
import { ListTrackPlayListComponent } from './components/list-track-play-list/list-track-play-list.component';
import { MisPlaylistComponent } from './components/mis-playlist/mis-playlist.component';
import { ModalAddPlaylistUserComponent } from './components/modal-add-playlist-user/modal-add-playlist-user.component';
import { AddTrackPlaylistUserComponent } from './components/add-track-playlist-user/add-track-playlist-user.component';
import { CaratulasPlaylistComponent } from './components/mis-playlist/caratulas-playlist/caratulas-playlist.component';
@NgModule({
  declarations: [
  NoImageDosPipe,
  PlaylistHomeComponent,
  PlaylistCategoriaComponent,
  CategoriasComponent,
  ListTrackPlayListComponent,
  MisPlaylistComponent,
  ModalAddPlaylistUserComponent,
  AddTrackPlaylistUserComponent,
  CaratulasPlaylistComponent],
  imports: [
    CommonModule,
    PlaylistRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatRadioModule


  ], providers: [PlaylistService]
})
export class PlaylistModule { }
