import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebaseAuth from 'firebase/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const auth = firebaseAuth.getAuth();
    return new Promise(
      (resolve, reject) => {
        firebaseAuth.onAuthStateChanged(auth, (user) => {
          if(user) {
            resolve(true);
          } else {
            this.router.navigate(['/signin']);
            resolve(false);
          }
        })
      }
    )
  }
}
