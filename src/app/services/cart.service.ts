import { Injectable } from '@angular/core';
import { from, of } from 'rxjs';
import { Product } from '../shared/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  public cartProducts: Product[] = [];
  findProduct(product: Product) {
    return this.cartProducts.filter((item) => {
      return item.id === product.id;
    });
  }

  addToCart(product: Product): void {
    if (this.cartProducts.length === 0) {
      this.cartProducts.push(product);
    } else {
      const currentProduct = this.findProduct(product);
      // if product isn't in cart then add to cart
      if (currentProduct[0] == undefined) {
        this.cartProducts.push(product);
      }
    }
  }

  addQuantity(product: Product): void {
    const currentProduct = this.findProduct(product);
    // if product isn't in cart then add to cart, else ++ quantity
    if (currentProduct[0] == undefined) {
      this.cartProducts.push(product);
    } else {
      currentProduct[0].quantity++;
    }
  }

  minusQuantity(product: Product): void {
    const currentProduct = this.findProduct(product);
    currentProduct[0].quantity--;
  }

  removeFromCart(product: Product) {
    if (this.cartProducts.length === 1) {
      this.cartProducts = [];
    } else {
      this.cartProducts = this.cartProducts.filter((item) => {
        return item.id !== product.id;
      });
    }
  }

  getCart() {
    return of(this.cartProducts);
  }
}

