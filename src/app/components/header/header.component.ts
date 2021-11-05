import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { LoginService } from 'src/app/services/login.service';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/shared/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  constructor(
    public CartService: CartService,
    private apiService: ApiService,
    public productService:ProductsService,
    public logService:LoginService,
  ) {}

  public showCart: boolean = false;

  ngOnInit(): void {
  }

  removeFromCart = (product: Product, element:any) => {
    this.CartService.removeFromCart(product)
    element.remove()
  }

  toggleCart(): void {
    this.showCart = !this.showCart;
  }
}
