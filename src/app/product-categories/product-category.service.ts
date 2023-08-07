import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { tap, shareReplay } from 'rxjs';
import { ProductCategory } from './product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  private productCategoriesUrl = 'api/productCategories';

  productCategories$ = this.http.get<ProductCategory[]>(this.productCategoriesUrl)
    .pipe(
      tap(data => console.log('categories', JSON.stringify(data))),
      shareReplay(1)
    );

  constructor(private http: HttpClient) { }

}
