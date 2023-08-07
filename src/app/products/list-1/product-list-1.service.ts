import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductList1Service {
  private productsUrl = 'api/products';

  products$ = this.http.get<Product[]>(this.productsUrl)

  constructor( private http: HttpClient ) { }

}
