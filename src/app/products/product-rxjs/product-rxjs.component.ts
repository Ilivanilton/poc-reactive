import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, catchError, combineLatest, EMPTY, map, Observable, Subject } from 'rxjs';
import { ProductCategoryService } from 'src/app/product-categories/product-category.service';
import { Product } from '../product';
import { ProductRxjsService } from './product-rxjs.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { selectAllProducts } from './store/product.selectors';
import { ProductActions } from './store/action-types';

@Component({
  templateUrl: './product-rxjs.component.html',
  styleUrls: ['./product-rxjs.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductRxjsComponent implements OnInit{
  pageTitle = 'Product Ngrx';

  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();

  private categorySelectedSubject = new BehaviorSubject<number>(0);
  categorySelectedAction$ = this.categorySelectedSubject.asObservable();


  allProducts$: Observable<Product[]> = this.store.select(selectAllProducts);

  products$ = combineLatest([
    this.allProducts$,
    this.categorySelectedAction$
  ])
    .pipe(
      map(([products, selectedCategoryId]) =>
        products.filter(product =>
          selectedCategoryId ? product.categoryId === selectedCategoryId : true
        )),
      catchError(err => {
        this.errorMessageSubject.next(err);
        return EMPTY;
      })
    );

  categories$ = this.productCategoryService.productCategories$
    .pipe(
      catchError(err => {
        this.errorMessageSubject.next(err);
        return EMPTY;
      })
    );

  vm$ = combineLatest([
    this.products$,
    this.categories$
  ])
    .pipe(
      map(([products, categories]) =>
        ({ products, categories }))
    );

  constructor(
    private productRxjsService: ProductRxjsService,
    private productCategoryService: ProductCategoryService,
    private store: Store<AppState>,
  ) { }
  
  ngOnInit(): void {
    this.store.dispatch(ProductActions.loadAllProducts());
  }

  onAdd(): void {
    let product =  this.fakeProduct();
    this.store.dispatch(ProductActions.createProduct({ product }))
  }

  onDelete(product: Product, idx: number): void {
    this.store.dispatch(ProductActions.deleteProduct({ product, idx }));
  }
  
  onSelected(categoryId: string): void {
    this.categorySelectedSubject.next(+categoryId);
  }

  onUpdate(product: Product): void {
    this.store.dispatch(ProductActions.updateProduct({ product }))
  }


  private fakeProduct(): Product {
    return {
      id: Math.floor(Math.random() * 100),
      productName: 'Another One',
      productCode: 'TBX-0042',
      description: 'Our new product',
      price: 8.9,
      categoryId: 3,
      category: 'Toolbox',
      quantityInStock: 30
    };
  }

}
