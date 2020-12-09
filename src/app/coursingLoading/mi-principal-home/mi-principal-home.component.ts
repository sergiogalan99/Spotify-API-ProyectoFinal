import { User } from 'src/app/shared/model/user';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { SpotifyService } from './../../shared/services/spotify.service';
import { UsersService } from './../../shared/services/users.service';
import { Router } from '@angular/router';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from 'src/app/shared/components/profile/profile.component';

@Component({
  selector: 'app-mi-principal-home',
  templateUrl: './mi-principal-home.component.html',
  styleUrls: ['./mi-principal-home.component.css']
})
export class MiPrincipalHomeComponent implements OnInit {
  error;
  mensajeError;
  model = '';
  userProfile: User;
  usernameActive = "";
  urlImage: string;

  constructor(public userService: UsersService,
    private spotifyService: SpotifyService,
    private router: Router,
    public dialog: MatDialog,
    private notificationService: NotificationService) { }


  ngOnInit(): void {
    this.comprobarToken();
    this.checkDatosPersonales();
    this.cambiarCancion();
    this.getImagenProfile();
  }

  cambiarCancion() {
    this.userService.getProfileUser(this.userService.idUsuario).subscribe((a) => {
      this.userService.uriActiva = a.data().uri;
    });
  }

  checkDatosPersonales() {
    this.userService.getIdUserActivo().then(id => {
      this.userService.getProfileUser(id.uid).subscribe((a) => {
        this.userProfile = a.data();

      });
    });
  }

  logout() {
    this.userService.logout().then(() => {
      this.router.navigate(['/login']);
    });
  }
  comprobarToken() {
    this.spotifyService.getNewReleases()
      .subscribe((data: any) => {
        this.notificationService.itemTokenIntroOK();
      }, (errorServicio) => {
        this.error = true;
        this.mensajeError = errorServicio.error.error.message;
      });
  }

  getToken() {
    sessionStorage.setItem('token', JSON.stringify(this.model));
    this.model = "";
    window.location.reload();
  }
  refresh() {
    this.router.navigate(['mi-principal-home']);
  }


  openModalProfile() {
    const dialogRef = this.dialog.open(ProfileComponent, {
      width: '800px',
      height: '550px',
      data: { user: this.userProfile }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.userService.getIdUserActivo().then(id => {
        this.userService.setUser(result.out, id.uid);
        this.checkDatosPersonales();
      });
    });
  }

  getImagenProfile() {
    this.userService.getIdUserActivo().then().then(id => {
      this.userService.getImageProfiles(id.uid).then(res => {
        this.urlImage = res;
      });
    });
  }
}
