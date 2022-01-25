import { Component } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'easy-cloud';
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyAgP1kjxwBo4ZV5_pAcVIQDMKQbi4ha7fo",
      authDomain: "easycloud-31b61.firebaseapp.com",
      projectId: "easycloud-31b61",
      storageBucket: "easycloud-31b61.appspot.com",
      messagingSenderId: "276184904347",
      appId: "1:276184904347:web:b4d2de152e39a37d3ccc3e"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
