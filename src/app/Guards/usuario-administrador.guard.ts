import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Servicios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioAdministradorGuard implements CanActivate {
  constructor(private router:Router, private auth:AuthService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      if(this.auth.authentication.currentUser == null)
      {
        this.router.navigate(['/login/iniciar-sesion']);
        return false;
      }else if(this.auth.authentication.currentUser.email != 'octavio_bill@hotmail.com')
      {
        this.router.navigate(['/home']);
        return false;
      }
    return true;
  }
  
}
