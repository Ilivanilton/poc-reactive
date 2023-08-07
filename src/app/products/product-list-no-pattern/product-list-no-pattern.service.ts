import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, tap } from 'rxjs';

import { Product } from '../product';


@Injectable({ providedIn: 'root' })
export class ProductListNoPatternService {
  private productsUrl = 'api/products';

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(this.productsUrl);
  }

}
