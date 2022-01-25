import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: '**', redirectTo: '/' },
  { path: '', component: HomeComponent},

  { path: 'signup', component: SignupComponent},
  { path: 'signin', component: SigninComponent},

  // { path: 'books/view/:id', canActivate: [AuthGuardService], component: SingleBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
