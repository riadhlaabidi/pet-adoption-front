import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/auth/login/login.component';
import { RecoverPasswordComponent } from './views/auth/recover-password/recover-password.component';
import { SignupComponent } from './views/auth/signup/signup.component';
import { BreedsComponent } from './views/breeds/breeds.component';
import { HomeComponent } from './views/home/home.component';
import { SearchPetsComponent } from './views/search-pets/search-pets.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { AuthGuard } from './security/auth.guard';
import { LoginGuard } from './security/login.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'register', component: SignupComponent, canActivate: [LoginGuard] },
  {
    path: 'recover-password',
    component: RecoverPasswordComponent,
    canActivate: [LoginGuard],
  },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchPetsComponent },
  { path: 'breeds', component: BreedsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
