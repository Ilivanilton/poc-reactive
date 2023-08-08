import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Product } from '../product';

@Injectable({providedIn:'root'})
export class ProductNgrxService {

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  url = 'api/products'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url)
  }

  create(product: Product): Observable<Product>{
    debugger
    return this.http.post<Product>(this.url,product)
  }

  delete(product: Product): Observable<boolean>{
    return this.http.delete<boolean>(`${this.url}/${product.id}`,{ headers: this.headers })
  }

  put(product: Product): Observable<Product>{
    return this.http.put<Product>(`${this.url}/${product.id}`,product)
  }

}
