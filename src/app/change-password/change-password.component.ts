import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Changepwresponse } from '../model/changepassword';
import { LoginService } from '../service/login/login.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent {
  changepwform: Changepwresponse = new Changepwresponse();
  res: any = {};
  loginid: any;
  constructor(
    private loginservice: LoginService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loginid = sessionStorage.getItem('loggedUserid');
    this.changepwform.action = 'change_password';
    this.changepwform.user_id = this.loginid;
  }

  changepw() {
    this.changepwform.action = 'change_password';
    this.loginservice.changepw(this.changepwform).subscribe((response) => {
      this.res = response;
      if (this.res.response[0].status == '1') {
        this.toastr.success(this.res.response[0].message);
      } else if (this.res.response[0].status == '0') {
        this.toastr.error(this.res.response[0].message);
      } else if (this.res.response[0].status == '1') {
        this.toastr.error(this.res.response[0].message);
      } else if (this.res.response[0].status == '2') {
        this.toastr.error(this.res.response[0].message);
      } else if (this.res.response[0].status == '3') {
        this.toastr.error(this.res.response[0].message);
      } else if (this.res.response[0].status == '4') {
        this.toastr.error(this.res.response[0].message);
      } else if (this.res.response[0].status == '5') {
        this.toastr.error(this.res.response[0].message);
      }
    });
  }
}
