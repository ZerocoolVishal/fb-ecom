import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {AuthService} from '../../services/auth.service';
import {User} from '../../models/user';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  id: string;
  product: Product;
  quantity = 1;
  user: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private auth: AuthService,
    private toastr: ToastrService
  ) {
    this.auth.user$.subscribe(user => {
      this.user = user;
    });
    this.activatedRoute.params.subscribe((params) => {
      this.id = params.id;
      if (this.id) {
        this.getProduct();
      }
    });
  }

  ngOnInit(): void { }

  getProduct(): void {
    this.productService.getProduct(this.id).subscribe((resp) => {
      if (resp.exists) {
        this.product = resp.data();
      }
    });
  }

  addToCart(): void {
    if (this.user) {
      this.productService.addToCart(this.id, this.quantity, this.user.id);
      this.toastr.success('Product to cart');
    }
  }

}
