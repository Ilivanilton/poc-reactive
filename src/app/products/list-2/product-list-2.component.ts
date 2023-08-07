import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

import { ProductCategoryService } from '../../product-categories/product-category.service';
import { ProductList2Service } from './product-list-2.service';

@Component({
  templateUrl: './product-list-2.component.html',
  styleUrls: ['./product-list-2.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductList2Component {
  pageTitle = 'Product List 2';

  private categorySelectedSubject = new BehaviorSubject<number>(0);
  categorySelectedAction$ = this.categorySelectedSubject.asObservable();

  products$ = combineLatest([ 
    this.productList2Service.productsWithCategory$,
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
  ]).pipe(
      map(([products, categories]) => ({ products, categories }))
    );
    
  constructor(
    private productList2Service: ProductList2Service,
    private productCategoryService: ProductCategoryService,
  ) { }


  onSelected(categoryId: string): void {
    this.categorySelectedSubject.next(+categoryId);
  }
  
}
