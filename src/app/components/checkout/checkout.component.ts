import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/shared/product';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  cartProducts: Product[] = [];
  orderForm!: FormGroup;
  submitted = false;
  constructor(
    public CartService: CartService,
    public router: Router) {}

  ngOnInit(): void {
    this.ordersForm();
  }
  ordersForm(){
    this.orderForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required),
      checkBox: new FormControl('', Validators.required),
    });
  
  }

  onSubmit() {
    alert(  `Your order succesfull`);
    console.log(this.orderForm.getRawValue());
    this.CartService.cartProducts=[];
    this.router.navigate(['shop']);
  }

  onReset() {
    this.submitted = false;
    this.orderForm.reset();
  }

  get firstName() {
    return this.orderForm.get('firstName');
  }
  get lastName() {
    return this.orderForm.get('lastName');
  }
  get email() {
    return this.orderForm.get('email');
  }
  get city() {
    return this.orderForm.get('city');
  }
  get street() {
    return this.orderForm.get('street');
  }
  get zip() {
    return this.orderForm.get('zip');
  }

  get checkBox() {
    return this.orderForm.get('checkbox');
  }
}