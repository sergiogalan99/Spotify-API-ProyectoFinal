import { NotificationService } from './../../../../../shared/services/notification.service';
import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/shared/model/user';
import { SpotifyService } from 'src/app/shared/services/spotify.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { ModalAddPlaylistUserComponent } from '../../modal-add-playlist-user/modal-add-playlist-user.component';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-caratulas-playlist',
  templateUrl: './caratulas-playlist.component.html',
  styleUrls: ['./caratulas-playlist.component.scss']
})
export class CaratulasPlaylistComponent implements OnInit {
  arrayPlaylist: Array<any> = [];
  arrayOut: Array<any> = [];
  arrayAux: Array<any> = [];
  arrayTracks: Array<any> = [];
  userAux = {} as User
  idPlaylist: string;
  @Output() propagar = new EventEmitter<boolean>();
  @Output() miArraytracks = new EventEmitter<Array<any>>();
  @Output() idPlay = new EventEmitter<string>();
  constructor(private usersService: UsersService, private notificationService: NotificationService, private spotifyService: SpotifyService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getPlaylist();


  }

  getPlaylist() {
    this.usersService.getIdUserActivo().then(id => {
      this.usersService.getProfileUser(id.uid).subscribe((a) => {
        this.arrayPlaylist = a.data().playlists;
        this.usersService.getPlaylistsUser(this.arrayPlaylist).subscribe((res) => {
          this.arrayOut = res;
        });
      });
    });
  }

  openModal() {

    const dialogRef = this.dialog.open(ModalAddPlaylistUserComponent, {
      width: '800px',
      height: '400px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getPlaylist();
    });
  }

  deletePlayListUser(idPlayList: string) {
    this.usersService.getIdUserActivo().then(id => {
      this.usersService.getProfileUser(id.uid).subscribe(res => {
        let miUser = this.eliminarId(res.data(), idPlayList);
        this.usersService.deletePlayListUser(idPlayList, miUser, id.uid);
        this.notificationService.itemDeletePlaylist();
      });
    });
  }

  eliminarId(miUser: User, idPlayList: string): User {
    let auxIdPlaylist: Array<any> = [];
    this.userAux.edad = miUser.edad;
    this.userAux.localidad = miUser.localidad;
    this.userAux.nombreApellidos = miUser.nombreApellidos;
    this.userAux.phone = miUser.phone;
    this.userAux.uri = miUser.uri;
    this.userAux.username = miUser.username;
    miUser.playlists.forEach(element => {
      if (element != idPlayList) {
        auxIdPlaylist.push(element);
      }
    });
    this.userAux.playlists = auxIdPlaylist;
    return this.userAux;
  }

  viewTrackPlayList(id: string) {
    this.usersService.getTracksPlaylistsUser(id).subscribe(data => {
      this.obtenerCanciones(data.data().tracks);
      this.idPlaylist = id;
      this.propagar.emit(false);
      this.idPlay.emit(this.idPlaylist);
    });
  }

  obtenerCanciones(arrayIdTracks: string[]) {
    arrayIdTracks.forEach(element => {
      this.spotifyService.getTrack(element).subscribe(res => {
        this.arrayTracks.push(res);
      });
    });
    this.miArraytracks.emit(this.arrayTracks);
  }
}