import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {User} from '../../models/user';
import {AuthService} from '../../services/auth.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  user: User;
  products: any;
  subTotal = 0;
  delivery = 0;
  total = 0;

  constructor(
    private auth: AuthService,
    private productService: ProductService
  ) {
    this.auth.user$.subscribe(user => {
      this.user = user;
      if (this.user) {
        this.getCart();
      }
    });
  }

  ngOnInit(): void { }

  private getCart(): void {
    this.productService.cart.subscribe((cart) => {
      this.productService.getProducts().pipe(take(1)).subscribe(allProducts => {
        this.subTotal = 0;
        this.products = allProducts.filter(p => cart[p.id]).map(product => {
          this.subTotal += (+product.price * cart[product.id]);
          return { ...product, count: cart[product.id] };
        });
        this.total = this.subTotal + this.delivery;
      });
    });
  }

  addQuantity(id): void {
    this.productService.addToCart(id, 1);
  }

  removeQuantity(id): void {
    this.productService.removeFrom(id, 1);
  }

}
