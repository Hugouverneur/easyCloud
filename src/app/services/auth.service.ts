import { Injectable } from '@angular/core';
import * as firebaseAuth from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  createNewUser(email: string, password: string) {
    const auth = firebaseAuth.getAuth();
    return new Promise(
      (resolve, reject) => {
        firebaseAuth.createUserWithEmailAndPassword(auth, email, password).then(
          (userCredential) => {
            resolve(userCredential);
          },
          (error) => {
            reject(error)
          }
        )

      }
    )
  }

  signIn(email: string, password: string) {
    const auth = firebaseAuth.getAuth();
    return new Promise(
      (resolve, reject) => {
        firebaseAuth.signInWithEmailAndPassword(auth, email, password).then(
          (success) => {
            resolve(success);
          },
          (error) => {
            reject(error);
          }
        )
      }
    )
  }

  signOut() {
    const auth = firebaseAuth.getAuth();
    firebaseAuth.signOut(auth);
  }
}
