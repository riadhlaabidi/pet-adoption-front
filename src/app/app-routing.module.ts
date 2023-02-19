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
import { UserProfileComponent } from './views/user-profile/user-profile.component';
import { MainComponent } from './views/home/main/main.component';
import { LostPetsComponent } from './views/lost-pets/lost-pets.component';
import { FoundPetComponent } from './views/found-pet/found-pet.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: MainComponent },
      {
        path: 'search',
        component: SearchPetsComponent,
        canActivate: [AuthGuard],
      }, //, canActivate: [AuthGuard]
      { path: 'breeds', component: BreedsComponent }, //, canActivate: [AuthGuard]
      {
        path: 'profile',
        component: UserProfileComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'lostPet',
        component: LostPetsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'foundPet',
        component: FoundPetComponent,
        canActivate: [AuthGuard],
      },
    ],
  },

  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'register', component: SignupComponent, canActivate: [LoginGuard] },
  {
    path: 'recover-password',
    component: RecoverPasswordComponent,
    canActivate: [LoginGuard],
  },
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
