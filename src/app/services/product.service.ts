import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../models/product';
import {AngularFirestore} from '@angular/fire/firestore';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private fs: AngularFirestore
  ) { }

  getProducts(): Observable<Product[]> {
    return this.fs.collection<Product>('products').valueChanges({ idField: 'id' });
  }

  getProduct(docId: string): Observable<firebase.firestore.DocumentSnapshot<Product>> {
    return this.fs.collection<Product>('products').doc(docId).get();
  }

}
