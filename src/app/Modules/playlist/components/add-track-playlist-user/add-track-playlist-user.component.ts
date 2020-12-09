import { PlayList } from './../../../../shared/model/user';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs/internal/Observable';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { ModalAddPlaylistUserComponent } from '../modal-add-playlist-user/modal-add-playlist-user.component';
@Component({
  selector: 'app-add-track-playlist-user',
  templateUrl: './add-track-playlist-user.component.html',
  styleUrls: ['./add-track-playlist-user.component.scss']
})
export class AddTrackPlaylistUserComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddTrackPlaylistUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder,
    private dialog: MatDialog,
    private usersService: UsersService,
    private notificationService: NotificationService) { }
  arrayPlaylist: Array<any> = [];
  arrayOut: Array<any> = [];
  arrayAux: Array<any> = [];

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
      height: '350px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getPlaylist();
     });
 
  }

  addtrackPlayList(item: any) {
   
      this.usersService.addTrackPlayList(item.id, item, this.data.id);
      this.notificationService.itemTrackPlayListOK(item.nombre);
   
  }
  close() {
    this.dialogRef.close();
  }
}