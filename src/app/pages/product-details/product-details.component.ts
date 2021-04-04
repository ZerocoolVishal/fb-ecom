import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;
  quantity = 1;

  constructor() { }

  ngOnInit(): void {
    this.product = {
      id: '123456',
      name: 'White Modern Chair',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?',
      price: 2300,
      quantity: 10
    };
  }

}
