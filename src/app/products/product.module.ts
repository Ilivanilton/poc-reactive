import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductListComponent } from './product-list.component';
import { ProductShellComponent } from './product-list-alt/product-shell.component';
import { ProductDetailComponent } from './product-list-alt/product-detail.component';
import { ProductListAltComponent } from './product-list-alt/product-list-alt.component';

import { SharedModule } from '../shared/shared.module';
import { ProductListEditComponent } from './product-list-edit/product-list-edit.component';
import { productListNoPatternComponent } from './product-list-no-pattern/product-list-no-pattern.component';
import { ProductList1Component } from './list-1/product-list-1.component';
import { ProductList2Component } from './list-2/product-list-2.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './product-rxjs/store/product.effects';
import { productsReducer } from './product-rxjs/store/product.reducers';
import { ProductRxjsComponent } from './product-rxjs/product-rxjs.component';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature('module_products',productsReducer),
    EffectsModule.forFeature([ProductEffects]),
    RouterModule.forChild([
      {
        path: '',
        component: ProductListComponent
      },
      {
        path: 'list1',
        component: ProductList1Component
      },
      {
        path: 'list2',
        component: ProductList2Component
      },
      {
        path: 'alternate',
        component: ProductShellComponent
      },
      {
        path: 'no-pattern',
        component: productListNoPatternComponent
      },
      {
        path: 'edit',
        component: ProductListEditComponent
      },
      {
        path: 'ngrx',
        component: ProductRxjsComponent
      }
    ])
  ],
  declarations: [
    ProductListComponent,
    ProductShellComponent,
    ProductListAltComponent,
    ProductDetailComponent,
    ProductListEditComponent,
    productListNoPatternComponent,
    ProductList1Component,
    ProductList2Component,
    ProductRxjsComponent,
  ]
})
export class ProductModule { }
