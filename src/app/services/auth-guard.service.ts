import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private logService:LoginService, private router:Router) { }
canActivate(){
  if (this.logService.logger == true) return true;
  this.router.navigate(['/login']); return false;
}

}
