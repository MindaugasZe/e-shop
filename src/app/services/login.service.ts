import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  logger: boolean = false ;
  constructor(private router: Router)
   {}

logout(){
  this.logger = false;
}
  
}


    