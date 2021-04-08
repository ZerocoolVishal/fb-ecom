import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Product} from '../models/product';
import {AngularFirestore} from '@angular/fire/firestore';
import firebase from 'firebase';

const INCREMENT = firebase.firestore.FieldValue.increment(1);
const DECREMENT = firebase.firestore.FieldValue.increment(-1);

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public cart = new BehaviorSubject({});

  constructor(
    private fs: AngularFirestore
  ) { }

  getProducts(): Observable<Product[]> {
    return this.fs.collection<Product>('products').valueChanges({ idField: 'id' });
  }

  getProduct(docId: string): Observable<firebase.firestore.DocumentSnapshot<Product>> {
    return this.fs.collection<Product>('products').doc(docId).get();
  }

  initCart(userId: string): void {
    this.fs.collection('carts').doc(userId).valueChanges().subscribe((res) => {
      this.cart.next(res);
    });
  }

  addToCart(id: string, quantity: number, userId: string): void {
    this.fs.collection('carts').doc(userId).set({
      [id]: INCREMENT,
    }, { merge: true });
  }

  removeFrom(id: string, quantity: number, userId: string): void {
    this.fs.collection('carts').doc(userId).set({
      [id]: DECREMENT,
    }, { merge: true });
  }

}
