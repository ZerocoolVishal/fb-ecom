import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  id: string;
  product: Product;
  quantity = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params.id;
      // console.log('id', this.id);
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

}
