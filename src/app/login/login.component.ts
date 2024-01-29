import { Component } from '@angular/core';
import { Login, Loginresponse } from '../model/login';
import { LoginService } from '../service/login/login.service';
// import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginform: Login = new Login();
  loginres: Loginresponse[] = [];
  res: any = {};
  username: any;

  constructor(
    private loginservice: LoginService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  login() {
    this.loginform.action = 'login';
    this.loginservice.login(this.loginform).subscribe((response) => {
      this.res = response;
      sessionStorage.setItem('status', this.res.response[0].type);
      sessionStorage.setItem('username', this.res.user_data[0].first_name);
      sessionStorage.setItem('userrole', this.res.user_data[0].user_role);
      if (this.res.response[0].type == 'success') {
        this.loginservice.button(
          this.res.response[0].type,
          this.res.user_data[0].first_name
        );
        this.toastr.success(this.res.response[0].message, '', {
          timeOut: 4000,
        });
        if (this.res.user_data[0].user_role == '1') {
          this.router.navigate(['/school-dashboard']);
          sessionStorage.setItem('loggedUserid', this.res.user_data[0].id);
        } else if (this.res.user_data[0].user_role == '2') {
          this.router.navigate(['/teacher-dashboard']);
          sessionStorage.setItem('loggedUserid', this.res.user_data[0].id);
        } else if (this.res.user_data[0].user_role == '3') {
          this.router.navigate(['/student-dashboard']);
          sessionStorage.setItem('loggedUserid', this.res.user_data[0].id);
        } else if (this.res.user_data[0].user_role == '4') {
          this.router.navigate(['/parent-dashboard']);
          sessionStorage.setItem('loggedUserid', this.res.user_data[0].id);
        } else if (this.res.user_data[0].user_role == '5') {
          this.router.navigate(['/admin-dashboard']);
          sessionStorage.setItem('loggedUserid', this.res.user_data[0].id);
        }
      } else {
        this.toastr.error(this.res.response[0].message, '', { timeOut: 4000 });
      }
    });
  }
}
