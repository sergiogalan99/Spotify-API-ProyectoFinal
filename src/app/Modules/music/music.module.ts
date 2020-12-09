import { MusicService } from './services/music.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { MusicHomeComponent } from './music-home/music-home.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
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
import { DetalleAlbumArtistaComponent } from './components/detalle-album-artista/detalle-album-artista.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TracksSearchedComponent } from './components/tracks-searched/tracks-searched.component';
import { MatSelectModule } from '@angular/material/select';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { NoImagePipe } from 'src/app/shared/pipes/no-image.pipe';
@NgModule({
  declarations: [
    NoImagePipe,
    MusicHomeComponent,
    TarjetasComponent,
    DetalleAlbumArtistaComponent,
    TracksSearchedComponent,
    BuscadorComponent],
  imports: [
    CommonModule,
    MusicRoutingModule,
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
    MatProgressSpinnerModule,
    MatSelectModule


  ], providers: [MusicService]
})
export class MusicModule { }
