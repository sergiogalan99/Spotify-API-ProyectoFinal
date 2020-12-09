import { UsersService } from './../../../../shared/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from './../../../../shared/services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { AddTrackPlaylistUserComponent } from 'src/app/Modules/playlist/components/add-track-playlist-user/add-track-playlist-user.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-detalle-album-artista',
  templateUrl: './detalle-album-artista.component.html',
  styleUrls: ['./detalle-album-artista.component.scss']
})
export class DetalleAlbumArtistaComponent implements OnInit {

  idArtista: { id: string }
  artista: any = {};
  topTracks: any[] = [];
  verUri = false;

  constructor(private spotifyService: SpotifyService,
    private rutaActiva: ActivatedRoute,
    private usersService: UsersService,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {

    this.getIdArtista();
    this.getArtistas(this.idArtista.id);
    this.getTopTracks(this.idArtista.id);
  }

  getIdArtista() {
    this.idArtista = {
      id: this.rutaActiva.snapshot.params.id
    }
  }

  getArtistas(id: string) {
    this.spotifyService.getArtista(id).subscribe(res => {
      this.artista = res;

    })
  }
  onClick() {
    this.router.navigate(['/mi-principal-home/music']);
  }

  getTopTracks(id: string) {
    this.spotifyService.getTopTracks(id).subscribe(res => {
      this.topTracks = res;
    });

  }

  viewTrack(uri: string) {
    this.usersService.addTrackUri(uri);
  }

  openModalProfile(idTrack:string) {

    const dialogRef = this.dialog.open(AddTrackPlaylistUserComponent, {
      width: '800px',
      height: '630px',
      data: { id: idTrack }
    });
  }

}
