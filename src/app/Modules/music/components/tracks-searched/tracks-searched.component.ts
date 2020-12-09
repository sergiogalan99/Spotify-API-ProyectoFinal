import { AddTrackPlaylistUserComponent } from './../../../playlist/components/add-track-playlist-user/add-track-playlist-user.component';
import { Router } from '@angular/router';
import { UsersService } from './../../../../shared/services/users.service';
import { PlaylistService } from '../../../playlist/services/playlist.service';
import { SpotifyService } from 'src/app/shared/services/spotify.service';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tracks-searched',
  templateUrl: './tracks-searched.component.html',
  styleUrls: ['./tracks-searched.component.css']
})
export class TracksSearchedComponent implements OnInit, OnChanges {
  @Input() items: any[] = [];
  constructor(private usersService: UsersService,
    private router: Router,  public dialog: MatDialog) { }
  ngOnChanges(): void {
  }
  ngOnInit(): void {

  }

  playMusic(uri: string) {
    this.usersService.addTrackUri(uri);
  }

  onClick() {
    this.router.navigate(['/mi-principal-home/music']);
  }


  
  openModalProfile(idTrack:string) {

    const dialogRef = this.dialog.open(AddTrackPlaylistUserComponent, {
      width: '800px',
      height: '630px',
      data: { id: idTrack }
    });
  }

}


