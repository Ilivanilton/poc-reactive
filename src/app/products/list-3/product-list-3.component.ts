import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, catchError, combineLatest, EMPTY, map, Subject } from 'rxjs';

import { ProductCategoryService } from '../../product-categories/product-category.service';
import { ProductList3Service } from './product-list-3.service';

@Component({
  templateUrl: './product-list-3.component.html',
  styleUrls: ['./product-list-3.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductList3Component {
  pageTitle = 'Product List 3';

  private categorySelectedSubject = new BehaviorSubject<number>(0);
  categorySelectedAction$ = this.categorySelectedSubject.asObservable();

  products$ = combineLatest([
    this.productService.productsWithAdd$,
    this.categorySelectedAction$
  ]).pipe(
      map(([products, selectedCategoryId]) =>
        products.filter(product =>
          selectedCategoryId ? product.categoryId === selectedCategoryId : true
        ))
    );

  categories$ = this.productCategoryService.productCategories$

  vm$ = combineLatest([
    this.products$,
    this.categories$
  ])
    .pipe(
      map(([products, categories]) =>
        ({ products, categories }))
    );

  constructor(
    private productService: ProductList3Service,
    private productCategoryService: ProductCategoryService) { }

  onAdd(): void {
    this.productService.addProduct();
  }

  onSelected(categoryId: string): void {
    this.categorySelectedSubject.next(+categoryId);
  }
}
