import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public _errorField = new BehaviorSubject(null);
  errorField = this._errorField.asObservable();
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    const token = localStorage.getItem('token');
    this._isLoggedIn$.next(!!token);
  }

  login(email: string, password: string) {
    // this.http.post<{ token: string }>('http://localhost:8080/api/auth/login', {
    //   email: email,
    //   password: password
    // }).subscribe({
    //   next: (res) => {
    //     if (res.token) {
    //       const array = res.token.split(' ');
    //       const TOKEN = array[1];
    //       localStorage.setItem('token', TOKEN);
    //       this._isLoggedIn$.next(true);
    //       this._errorField.next(null);
    //       this.router.navigate(['/']);
    //     }
    //   },
    //   error: err => {
    //     switch (err.status) {
    //       case 400 :
    //         this._errorField.next('bad credentials');
    //         break;
    //       default :
    //         this._errorField.next(err.message);
    //     }
    //     localStorage.clear();
    //   }
    // });
    localStorage.setItem('token', 'token');
    this._isLoggedIn$.next(true)
  }

  logOut() {
    localStorage.clear();
    this._isLoggedIn$.next(false)
    this.router.navigate(['/login']);
  }

  signIn(user :string) {
    // this.http.post<{ token: string }>('http://localhost:8080/api/auth/registre', user).subscribe(res => {
    //   const array = res.token.split(' ');
    //   const TOKEN = array[1];
    //   localStorage.setItem('token', TOKEN);
    //   this._isLoggedIn$.next(true);
    //   console.log('sign up success');
    //   this.router.navigate(['/']);
    // });
    localStorage.setItem('token', 'token');
    this._isLoggedIn$.next(true);
    this.router.navigate(['/']);
  }

}
