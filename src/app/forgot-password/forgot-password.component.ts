import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Forgotpwresponse } from '../model/changepassword';
import { LoginService } from '../service/login/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  forgotpwform: Forgotpwresponse = new Forgotpwresponse();
  res: any = {};

  constructor(
    private loginservice: LoginService,
    private toastr: ToastrService
  ) {}
  

  forgotpw() {
    this.forgotpwform.action = 'forgot_password';
    this.loginservice.forgotpw(this.forgotpwform).subscribe((response) => {
      this.res = response;
      console.log('sampledatatest', this.res);
      if (this.res.response[0].status == '1') {
        this.toastr.success(this.res.response[0].message);
      } else if (this.res.response[0].status == '0') {
        this.toastr.error(this.res.response[0].message);
      } else if (this.res.response[0].status == '2') {
        this.toastr.error(this.res.response[0].message);
      } else if (this.res.response[0].status == '3') {
        this.toastr.error(this.res.response[0].message);
      } else if (this.res.response[0].status == '4') {
        this.toastr.error(this.res.response[0].message);
      }
    });
  }
}
