import { SpotifyService } from './../../../../shared/services/spotify.service';
import { NotificationService } from './../../../../shared/services/notification.service';
import { PlayList } from './../../../../shared/model/user';
import { MatDialog } from '@angular/material/dialog';
import { Component, Input, OnInit, ɵConsole } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';
import { AddTrackPlaylistUserComponent } from '../add-track-playlist-user/add-track-playlist-user.component';

@Component({
  selector: 'app-list-track-play-list',
  templateUrl: './list-track-play-list.component.html',
  styleUrls: ['./list-track-play-list.component.scss']
})
export class ListTrackPlayListComponent implements OnInit {

  @Input() items: any[] = [];
  @Input() botonAdd: boolean;
  @Input() botonDelete: boolean;
  @Input() idPlaylist: string;
  miPlaylist = {} as PlayList;
  constructor(private usersService: UsersService,
    private spotifyService: SpotifyService,
     private dialog: MatDialog, private notificationService:NotificationService) { }

  ngOnInit(): void {
  
  }

  playMusic(uri: string) {
    this.usersService.addTrackUri(uri);
  }

  deleteTrackPlayListUser(idTrack: string) {
    this.usersService.getTracksPlaylistsUser(this.idPlaylist).subscribe(res => {
      const miPlaylist = this.eliminarId(res.data(), idTrack);
      this.usersService.deleteTrackPlayListUser(this.idPlaylist, miPlaylist);
      this.usersService.getTracksPlaylistsUser(this.idPlaylist).subscribe(element => {
        this.obtenerCanciones(element.data().tracks);
        this.notificationService.itemTrackPlaylistDelteUserOk();
      });
    });
  }
  obtenerCanciones(arrayIdTracks: string[]) {
    const arrayTracks =[]
    arrayIdTracks.forEach(element => {
      this.spotifyService.getTrack(element).subscribe(res => {
        arrayTracks.push(res);
      });
    });
    
    this.items= arrayTracks;

  }

  eliminarId(miPlaylist: PlayList, idTrack: string): PlayList {
    let auxIdTrack: Array<any> = [];
    this.miPlaylist.description = miPlaylist.description;
    this.miPlaylist.nombre = miPlaylist.nombre;
    miPlaylist.tracks.forEach(element => {
      if (element != idTrack) {
        auxIdTrack.push(element);
      }
    });
    this.miPlaylist.tracks = auxIdTrack;
    return this.miPlaylist;
  }

  openModalProfile(itemId: string) {
    const dialogRef = this.dialog.open(AddTrackPlaylistUserComponent, {
      width: '800px',
      height: '630px',
      data: { id: itemId }
    });
  }
}
