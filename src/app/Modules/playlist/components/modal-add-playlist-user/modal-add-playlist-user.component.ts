import { PlayList } from './../../../../shared/model/user';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs/internal/Observable';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-modal-add-playlist-user',
  templateUrl: './modal-add-playlist-user.component.html',
  styleUrls: ['./modal-add-playlist-user.component.css']
})
export class ModalAddPlaylistUserComponent implements OnInit {
  reactiveForm: FormGroup;
  viewDatos = true;
  urlImage: Observable<string>;
  image;
  idList: any;
  miPlayList = {
  } as PlayList;
  constructor(public dialogRef: MatDialogRef<ModalAddPlaylistUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder,
    private usersService: UsersService,
    private notificationService: NotificationService) { }
  ngOnInit(): void {
    this.initForm();
  }

  onUpload(e) {
    this.image = e.target.files[0];

    this.notificationService.itemimagenCargada();
  }
  initForm = () => {
    this.reactiveForm = this.fb.group(
      {
        nombre: new FormControl({ value: '', disabled: false }, Validators.required),
        description: new FormControl({ value: '', disabled: false }, Validators.required),
      }

    )
  }


  emitEditForm = () => {

    this.miPlayList.nombre = this.reactiveForm.value.nombre;
    this.miPlayList.description = this.reactiveForm.value.description;
    this.miPlayList.tracks = [];
    this.usersService.getIdUserActivo().then(id => {
      this.usersService.getProfileUser(id.uid).subscribe(res => {
        this.idList = this.usersService.addPlayList(this.miPlayList, res.data(), id.uid);
        this.dialogRef.close();
      });
    });
  }

  close() {
    this.dialogRef.close();
  }

  // addPlayImagenList() {
  //   this.usersService.setImagenPlaylist(this.image, this.idList);
  //   this.dialogRef.close();
  //   this.notificationService.itemPlaylistUserOk();
  // }

}
