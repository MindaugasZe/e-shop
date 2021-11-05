import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { LoginService } from '../services/login.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  logger!: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    public productService: ProductsService,
    public logService: LoginService
  ) {}

  ngOnInit() {
    this.logForm();
  }
  logForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  login(): void {
    this.apiService
      .post('/login', this.loginForm.getRawValue())
      .subscribe((data: any) => {
        // console.log(data.token);
        const key = data.token;
        const token = sessionStorage.setItem('TOKEN', key);
        // alert(`Prisijungta sekmingai`);
        this.loginForm.reset();
        this.logService.logger = true;
        this.router.navigate(['shop']);
      });
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
}
