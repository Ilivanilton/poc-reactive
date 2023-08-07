import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { ProductListNoPatternService } from './product-list-no-pattern.service';
import { Product } from '../product';

@Component({
  templateUrl: './product-list-no-pattern.html',
  styleUrls: ['./product-list-no-pattern.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class productListNoPatternComponent implements OnInit, OnDestroy{
  pageTitle = 'Product List (NoPattern)';

  products: Product[] = [];
  subscribe$: any;
  

  constructor(
    private productListNoPatternService: ProductListNoPatternService,
  ) { }

  ngOnInit(): void {
    this.subscribe$ = this.productListNoPatternService.getAll()
      .subscribe(p => this.products = p)
  }

  ngOnDestroy(): void {
      this.subscribe$.unsubscribe()
  }


}
