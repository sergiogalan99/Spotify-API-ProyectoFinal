import { NotificationService } from './../../services/notification.service';
import { UsersService } from './../../services/users.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  reactiveForm: FormGroup;
  reactiveFormDos: FormGroup;
  error: string;
  salidaError = false;
  errorDos: string;
  salidaErrorDos = false;
  miUser = {

  } as User;
  constructor(private fb: FormBuilder, private router: Router, private userService: UsersService, private notificationService: NotificationService) { }
  ngAfterViewInit(): void {
  }


  ngOnInit(): void {
    this.salidaError = false;
    this.initForm();


  }
  initForm() {

    this.reactiveForm = this.fb.group(

      {
        email: new FormControl({ value: '', disabled: false }, Validators.required),
        password: new FormControl({ value: '', disabled: false }, Validators.required)
      }
    )
    this.reactiveFormDos = this.fb.group(

      {
        emailDos: new FormControl({ value: '', disabled: false }, Validators.required),
        passwordDos: new FormControl({ value: '', disabled: false }, Validators.required),
        usernameDos: new FormControl({ value: '', disabled: false }, Validators.required)
      }
    )
  }
  loginUser() {
    this.userService.login(this.reactiveForm.value.email, this.reactiveForm.value.password).then(res => {
      this.router.navigate(['/mi-principal-home']);
      this.userService.idUsuario = res.user.uid;
    }).catch(error => {
      this.salidaError = true;
      this.error = 'Las credenciales son incorrectas o cuenta inexiste.';
    });
  }

  registUser() {
    if (this.reactiveFormDos.value.emailDos.length > 0 &&
      this.reactiveFormDos.value.passwordDos.length > 0 &&
      this.reactiveFormDos.value.usernameDos.length > 0) {
      this.crearUser();
      this.userService.signUp(this.reactiveFormDos.value.emailDos, this.reactiveFormDos.value.passwordDos).then((id) => {
        this.router.navigate(['/mi-principal-home']);
        this.notificationService.itemUserNuevo(this.reactiveFormDos.value.usernameDos);
        this.userService.idUsuario = id.user.uid;
        this.userService.getIdUserActivo().then(res => {
          this.userService.setUser(this.miUser, res.uid);
        });
      }).catch(error => {
        this.salidaErrorDos = true;
        this.errorDos = 'ERROR';
      });
    } else {
      this.salidaErrorDos = true;
      this.errorDos = 'Campos incompletos';
    }
  }

  crearUser() {
    this.miUser.username = this.reactiveFormDos.value.usernameDos;
    this.miUser.edad = "";
    this.miUser.nombreApellidos = "";
    this.miUser.phone = "";
    this.miUser.localidad = "";
    this.miUser.uri = "";
    this.miUser.playlists = [];
  }

}
