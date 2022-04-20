import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { DetailInstanceComponent } from './components/detail-instance/detail-instance.component';
import { EditInstanceComponent } from './components/edit-instance/edit-instance.component';
import { HomeComponent } from './components/home/home.component';
import { ListInstanceComponent } from './components/list-instance/list-instance.component';
import { NewInstanceComponent } from './components/new-instance/new-instance.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },

  { path: 'signup', component: SignupComponent},
  { path: 'signin', component: SigninComponent},

  { path: 'list-instances', canActivate: [AuthGuardService], component: ListInstanceComponent },
  { path: 'new-instance', canActivate: [AuthGuardService], component: NewInstanceComponent },
  { path: 'instance/:id', canActivate: [AuthGuardService], component: DetailInstanceComponent },
  { path: 'edit-instance/:id', canActivate: [AuthGuardService], component: EditInstanceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
