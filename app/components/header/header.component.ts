import { Component, OnInit } from '@angular/core';
import * as firebaseAuth from 'firebase/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuth: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    const auth = firebaseAuth.getAuth();
    firebaseAuth.onAuthStateChanged(
      auth,
      (user) => {
        if(user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    );
  }

  onSignOut() {
    this.authService.signOut();
  }

}
