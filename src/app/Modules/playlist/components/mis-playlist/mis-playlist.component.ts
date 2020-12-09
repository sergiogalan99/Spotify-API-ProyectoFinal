import { SpotifyService } from './../../../../shared/services/spotify.service';
import { ModalAddPlaylistUserComponent } from './../modal-add-playlist-user/modal-add-playlist-user.component';
import { UsersService } from 'src/app/shared/services/users.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/shared/model/user';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-mis-playlist',
  templateUrl: './mis-playlist.component.html',
  styleUrls: ['./mis-playlist.component.scss']
})
export class MisPlaylistComponent implements OnInit {

  arrayPlaylist: Array<any> = [];
  arrayOut: Array<any> = [];
  arrayAux: Array<any> = [];
  arrayTracks: Array<any> = [];
  userAux = {} as User
  idPlaylist: string;
  constructor(private usersService: UsersService, private spotifyService: SpotifyService) { }
  ngOnInit() {
  }

  ocultacion = true;

  procesaPropagar(mensaje) {
    this.ocultacion = mensaje;
  }
  arrayItems(mensaje) {
    this.arrayTracks = mensaje;
  }

  idPlay(id) {
    this.idPlaylist = id;

  }
  onClick() {
    this.ocultacion = true;
    this.arrayTracks = [];
  }

}
