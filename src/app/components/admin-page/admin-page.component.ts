import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Product } from 'src/app/shared/product';
import { FormsModule } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  public cartForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    public logService:LoginService,
    public router:Router,

  ) {}

  ngOnInit(): void {
    this.cartForm = this.createCartForm();
  }

  addProductCard(): void {
    this.apiService
      .post('/shop/', this.cartForm.getRawValue())
      .subscribe(({ data }: any) => data);
  }
  
  private createCartForm(): FormGroup {
    return this.formBuilder.group({
      id: [undefined],
      image: [''],
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      quantity: [1, Validators.required],
    });
  }
  get image(){
    return this.cartForm.get('image');
  }
  get title(){
    return this.cartForm.get('title');
  }
  get description(){
    return this.cartForm.get('description');
  }
}
