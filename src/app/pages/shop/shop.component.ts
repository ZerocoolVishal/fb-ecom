import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';
import {AngularFirestore} from '@angular/fire/firestore';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private db: AngularFirestore,
    private productService: ProductService
  ) {
    this.getProducts();
  }

  ngOnInit(): void { }

  getProducts(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

}
