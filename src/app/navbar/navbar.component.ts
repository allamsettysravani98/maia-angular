import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../service/login/login.service';
import { BreadcrumbService } from '../service/breadcrumb.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  res: any = {};
  status: any;
  user_role: any;
  username: any;

  constructor(
    private router: Router,
    public _loginservice: LoginService,
    private route: ActivatedRoute,
    public breadcrumbService: BreadcrumbService
  ) {}

  ngOnInit() {
    this.status = sessionStorage.getItem('status');
    this.username = sessionStorage.getItem('username');
    this._loginservice.button(this.status, this.username);
  }

  btn(loginbtn: string) {
    console.log(loginbtn);
    if (loginbtn == 'LogIn') {
      this.router.navigate(['/login']);
    } else {
      this._loginservice.loginbutton = 'LogIn';
      this._loginservice.registerbutton = '/ Register';
      this._loginservice.userName = '';
      this._loginservice.dashboard = '';
      this.router.navigate(['/']);
      sessionStorage.clear();
    }
  }

  dashboard() {
    this.user_role = sessionStorage.getItem('userrole');
    if (this.user_role == '1') {
      this.router.navigate(['/school-dashboard']);
    } else if (this.user_role == '2') {
      this.router.navigate(['/teacher-dashboard']);
    } else if (this.user_role == '3') {
      this.router.navigate(['/student-dashboard']);
    } else if (this.user_role == '4') {
      this.router.navigate(['/parent-dashboard']);
    } else if (this.user_role == '5') {
      this.router.navigate(['/admin-dashboard']);
    }
  }
}
