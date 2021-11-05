import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/shared/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  
  constructor(public CartService: CartService) {}

  cartProducts: Product[] = [];

  ngOnInit(): void {
  }

  removeFromCart = (product: Product, element:any) => {
    this.CartService.removeFromCart(product)
    element.remove()
  }
   
  increase(product: Product): void {
    this.CartService.addQuantity(product);
  }
  
  decrease(product: Product): void {
    this.CartService.minusQuantity(product);
  }
}

