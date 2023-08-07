import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ProductList1Service } from './product-list-1.service';

@Component({
  templateUrl: './product-list-1.component.html',
  styleUrls: ['./product-list-1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductList1Component {
  pageTitle = 'Product List 1';

  products$ = this.productList1Service.products$

  constructor(
    private productList1Service: ProductList1Service,
  ) { }

}
