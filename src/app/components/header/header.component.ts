import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../security/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnDestroy, OnInit {
  isLogin = false;
  loginSubscribe: any;
  menuPopover = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.loginSubscribe = this.authService.isLoggedIn$.subscribe((res) => {
      this.isLogin = res;
    });
  }

  ngOnDestroy(): void {
    this.loginSubscribe.unsubscribe();
  }

  ngAfterViewInit() {}

  toggleMenu() {
    this.menuPopover = !this.menuPopover;
  }

  logout() {
    this.authService.logOut();
  }
}
