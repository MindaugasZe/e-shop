import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Information } from '../shared/information';
import { INFORMATION } from '../shared/mock-information';
import { PRODUCTS } from '../shared/mock-product';
import { Product } from '../shared/product';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  getInfo(): Observable<Information[]> {
    return of(INFORMATION);
  }
  
  constructor(private apiService: ApiService) {}

  getProducts(): Observable<Product[]> {
    const products: Product[] = [];
    this.apiService
      .get('/shop')
      .subscribe((items: any) => products.push(items));
    return of(products);
  }
}
