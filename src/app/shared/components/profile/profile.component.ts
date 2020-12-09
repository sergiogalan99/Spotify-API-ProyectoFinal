import { NotificationService } from './../../services/notification.service';
import { UsersService } from './../../services/users.service';
import { SpotifyService } from './../../services/spotify.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../model/user';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  reactiveForm: FormGroup;
  ordenEditView = false;
  categoriaList = [];
  emailUserActivo = "";
  idUserActivo = "";
  urlImage: string;
  image;
  miUser = {
  } as User;
  constructor(public dialogRef: MatDialogRef<ProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder,
    private usersService: UsersService,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.initForm();
    this.usersService.getIdUserActivo().then(res => {
      this.emailUserActivo = res.email;
      this.idUserActivo = res.uid;
      this.getImagenProfile();
    });
  }

  onUpload(e) {
    this.image = e.target.files[0];
    this.usersService.getIdUserActivo().then(id => {
      this.usersService.uploadPreview(this.image, id.uid).then(res => {
        this.urlImage = res;
        this.notificationService.itemimagenCargada();
      });

    })
  }
  initForm = () => {
    this.reactiveForm = this.fb.group(
      {
        nombreApellidos: new FormControl({ value: this.data.user ? this.data.user.nombreApellidos : '', disabled: false }, Validators.required),
        username: new FormControl({ value: this.data.user ? this.data.user.username : '', disabled: false }, Validators.required),
        phone: new FormControl({ value: this.data.user ? this.data.user.phone : '', disabled: false }, Validators.required),
        edad: new FormControl({ value: this.data.user ? this.data.user.edad : '', disabled: false }, Validators.required),
        localidad: new FormControl({ value: this.data.user ? this.data.user.localidad : '', disabled: false }, Validators.required),
      }

    )
  }

  getImagenProfile() {
    this.usersService.getIdUserActivo().then().then(id => {
      this.usersService.getImageProfiles(id.uid).then(res => {
        this.urlImage = res;
      });
    });
  }

  emitEditForm = () => {
    this.getDatos();
    this.notificationService.itemProfileUserOk();
  }

  getDatos(){
    this.miUser.nombreApellidos = this.reactiveForm.value.nombreApellidos;
    this.miUser.username = this.reactiveForm.value.username;
    this.miUser.phone = this.reactiveForm.value.phone;
    this.miUser.edad = this.reactiveForm.value.edad;
    this.miUser.localidad = this.reactiveForm.value.localidad;
    this.miUser.uri = this.data.user.uri;
    this.miUser.playlists = this.data.user.playlists;
    this.dialogRef.close({ out: this.miUser });
  }
  guardarImagen() {
    this.usersService.getIdUserActivo().then(id => {
      this.usersService.setImagenProfile(this.image, id.uid).then(res => {
        this.usersService.image = res;
        this.getDatos();
        this.notificationService.itemImagenCambiada();
      });
    });
  }

  close() {
    this.dialogRef.close(null);
  }

  editarPerfil() {
    this.ordenEditView = true;
  }


}