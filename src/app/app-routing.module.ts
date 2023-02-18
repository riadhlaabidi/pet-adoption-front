import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/auth/login/login.component';
import { BreedsComponent } from './views/breeds/breeds.component';
import { HomeComponent } from './views/home/home.component';
import { SearchPetsComponent } from './views/search-pets/search-pets.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchPetsComponent },
  { path: 'breeds', component: BreedsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
