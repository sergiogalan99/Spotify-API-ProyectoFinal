import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { AppNotification } from '../const/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackBar: MatSnackBar) { }

  itemTokenIntroOK() {
    this.snackBar.open(AppNotification.TOKEN_INTRO_OK, 'OK', {
      duration: 3000
    });
  }
  itemImagenCambiada() {
    this.snackBar.open(AppNotification.IMAGEN_CAMBIADA, 'OK', {
      duration: 3000
    });
  }
  itemTrackPlayListOK(nombre: string) {
    this.snackBar.open(AppNotification.TRACK_ADD_PLAYLIST_USER + nombre , 'OK', {
      duration: 3000
    });
  }
  itemTokenIntroERROR() {
    this.snackBar.open(AppNotification.TOKEN_INTRO_ERROR, 'ERROR', {
      duration: 3000
    });
  }
  itemimagenCargada() {
    this.snackBar.open(AppNotification.IMAGEN_CARGADA, 'OK', {
      duration: 3000
    });
  }
  itemProfileUserOk() {
    this.snackBar.open(AppNotification.USER_OK_PROFILE, 'OK', {
      duration: 3000
    });
  }
  itemPlaylistUserOk() {
    this.snackBar.open(AppNotification.USER_OK_PLAYLIST, 'OK', {
      duration: 3000
    });
  }

  itemDeletePlaylist() {
    this.snackBar.open(AppNotification.DELETE_PLAYLIST_USER, 'OK', {
      duration: 3000
    });
  }

   
  itemTrackPlaylistDelteUserOk() {
    this.snackBar.open(AppNotification.TRACK_DELETE_PLAYLIST_USER, 'OK', {
      duration: 3000
    });
  }
  itemUserNuevo(username: string) {
    this.snackBar.open(AppNotification.TOKEN_USER_NEW, username, {
      duration: 3000
    });
  }

}
