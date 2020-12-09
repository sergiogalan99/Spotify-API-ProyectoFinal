import { UsersService } from './../services/users.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(private authService: UsersService, private router: Router) { }
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.authService.hasSession().pipe(tap(hasNotSession => {
      if (!hasNotSession) {
        this.router.navigate(['/login']);
      }
    }));
  }
}
