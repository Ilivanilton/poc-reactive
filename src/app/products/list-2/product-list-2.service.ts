import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { combineLatest, map, shareReplay, } from 'rxjs';

import { Product } from '../product';
import { ProductCategoryService } from '../../product-categories/product-category.service';

@Injectable({
  providedIn: 'root'
})
export class ProductList2Service {
  private productsUrl = 'api/products';

  products$ = this.http.get<Product[]>(this.productsUrl)

  productsWithCategory$ = combineLatest([
    this.products$,
    this.productCategoryService.productCategories$
  ]).pipe(
    map(([products, categories]) =>
      products.map(product => ({
        ...product,
        price: product.price ? product.price * 1.5 : 0,
        category: categories.find(c => product.categoryId === c.id)?.name,
        searchKey: [product.productName]
      } as Product))
    ),
    shareReplay(1)
  );

  constructor(
    private http: HttpClient,
    private productCategoryService: ProductCategoryService,
  ) { }

}
