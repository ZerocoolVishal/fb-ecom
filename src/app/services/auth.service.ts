import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from '../models/user';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import firebase from 'firebase';
import auth = firebase.auth;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private fs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.fs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        else {
          return of(null);
        }
      })
    );
  }

  async googleSignIn(): Promise<any> {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  async signOut(): Promise<any> {
    await this.afAuth.signOut();
    return this.router.navigate(['']);
  }

  private updateUserData(user): any {
    const userRef: AngularFirestoreDocument<User> = this.fs.doc(`users/${user.uid}`);
    const data: User = {
      id: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };
    return userRef.set(data, { merge: true });
  }

}
