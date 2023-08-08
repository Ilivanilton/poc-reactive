import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { concatMap, map, tap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

import { ProductNgrxService } from '../product-ngrx.service';
import { ProductActions } from './action-types';

@Injectable({
  providedIn: 'root'
})
export class ProductEffects {

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ProductActions.loadAllProducts),
        concatMap(() =>
          this.productService.getAll().pipe(
            map(products => ProductActions.loadAllProductsSuccess({ products })),
            catchError(error => EMPTY ))
          ),
    )
  );

  createProduct$ = createEffect(()=>
    this.actions$.pipe(
      ofType(ProductActions.createProduct),
      concatMap(action =>
        this.productService.create(action.product).pipe(
          map( product => ProductActions.createProductSuccess({ product })),
          catchError(error => EMPTY))
      )
    )
  );

  deleteProduct$ = createEffect(()=>
    this.actions$.pipe(
      ofType(ProductActions.deleteProduct),
      concatMap(action =>
        this.productService.delete(action.product).pipe(
          catchError(error => EMPTY))
      )
    ),
    {dispatch: false}
  );

  updateProduct$ = createEffect(()=>
    this.actions$.pipe(
      ofType(ProductActions.updateProduct),
      tap( v => {
        debugger
      }),
      concatMap(action =>
        this.productService.put(action.product).pipe(
          catchError(error => EMPTY))
      )
    ),
    {dispatch: false}
  );


  constructor(
    private actions$: Actions,
    private productService: ProductNgrxService) {}
    
}
