import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  products: Product[] = [
    {
      id: '123456',
      name: 'White Modern Chair',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?',
      price: 2300,
      quantity: 10
    },
    {
      id: '2345',
      name: 'White Modern Chair',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?',
      price: 2300,
      quantity: 10
    },
    {
      id: '12345',
      name: 'White Modern Chair',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?',
      price: 2300,
      quantity: 10
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
