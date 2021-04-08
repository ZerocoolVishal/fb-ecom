import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartCount = 0;

  constructor(
    public auth: AuthService,
    private productService: ProductService,
  ) {
    this.productService.cart.subscribe((cart) => {
      this.cartCount = 0;
      Object.values(cart).forEach((v) => {
        if (v) {
          this.cartCount += 1;
        }
      });
    });
  }

  ngOnInit(): void {
  }

}
