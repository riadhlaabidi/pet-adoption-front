import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { HomeComponent } from './views/home/home.component';
import { FeatureComponent } from './components/feature/feature.component';
import { CtaComponent } from './components/cta/cta.component';
import { StatsComponent } from './components/stats/stats.component';
import { LoginComponent } from './views/auth/login/login.component';
import { SearchPetsComponent } from './views/search-pets/search-pets.component';
import { BreedsComponent } from './views/breeds/breeds.component';
import { RecoverPasswordComponent } from './views/auth/recover-password/recover-password.component';
import { SignupComponent } from './views/auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    NotFoundComponent,
    NewsletterComponent,
    HomeComponent,
    FeatureComponent,
    CtaComponent,
    StatsComponent,
    LoginComponent,
    SearchPetsComponent,
    BreedsComponent,
    SignupComponent,
    RecoverPasswordComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
