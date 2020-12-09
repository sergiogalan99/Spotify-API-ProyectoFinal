import { AuthGuardService } from './guards/auth-guard.service';
import { LoginComponent } from './components/login/login.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MiPrincipalHomeComponent } from '../coursingLoading/mi-principal-home/mi-principal-home.component';


const routes: Routes = [
 
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  {
    path: 'mi-principal-home', canActivate: [AuthGuardService], component: MiPrincipalHomeComponent, children:
      [
        { path: '', loadChildren: () => import('../Modules/playlist/playlist.module').then(m => m.PlaylistModule) },
        { path: 'music', loadChildren: () => import('../../app/Modules/music/music.module').then(m => m.MusicModule) }
      ]
  },
 
  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
