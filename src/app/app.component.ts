import { Component } from '@angular/core';
import { map, startWith } from 'rxjs';
import { CartService } from './cart/cart.service';
import { Product } from './products/product';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'POC';

  cartCount$ = this.cartService.cartItems$.pipe(
    startWith([] as Product[]),
    map(items => items.length)
  );

  constructor(private cartService: CartService) {}
}
