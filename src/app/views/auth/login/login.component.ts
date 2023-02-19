import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../security/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  returnUrl='/';
  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
  }

  send() {
    this.authService.login('email', 'password')
    this.router.navigateByUrl(this.returnUrl);
  }
}
