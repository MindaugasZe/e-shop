import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/shared/product';
import { CartService } from 'src/app/services/cart.service';
import { ApiService } from 'src/app/services/api.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {

  constructor(
    private CartService: CartService,
    private apiService: ApiService,
    public productService:ProductsService,
    public logService:LoginService,
    // public router:Router,
    ) {}
    
  public products: Product[] = [];
  public searchProductResult: Product[] = [];
  
  ngOnInit(): void {
    this.loadCards();
  }

  private loadCards(): void {
    this.apiService
      .get('/shop/')
      .subscribe((data: any) => (this.products = data.data));
  }

  increase(product: Product): void {
    this.CartService.addQuantity(product);
  }

  decrease(product: Product): void {
    this.CartService.minusQuantity(product);
  }

  public addToCart(product: Product) {
    this.CartService.addToCart(product);
  }

  removeProduct(id:number) {
    this.apiService
    .delete(`/shop/${id} `)
    .subscribe(() => this.products = this.products.filter(data => data.id !== id))
  }

  searchProducts(input: string) {
    this.searchProductResult = this.products.filter((item) => {
      return item.title.toLocaleLowerCase().includes(input.toLocaleLowerCase())
    })
  }
}


