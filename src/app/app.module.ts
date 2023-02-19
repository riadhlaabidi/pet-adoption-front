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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './security/auth-interceptor.service';
import { UserProfileComponent } from './views/user-profile/user-profile.component';
import { MainComponent } from './views/home/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { LostPetsComponent } from './views/lost-pets/lost-pets.component';
import { FoundPetComponent } from './views/found-pet/found-pet.component';

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
    UserProfileComponent,
    MainComponent,
    FooterComponent,
    LostPetsComponent,
    FoundPetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
