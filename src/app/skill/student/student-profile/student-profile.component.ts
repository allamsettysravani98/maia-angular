import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/model/register';
import { ProfileService } from 'src/app/service/profile/profile.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent {
  loginid: any;
  res: any = {};
  profile: User = new User();


  constructor(
    private profileservice: ProfileService, private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.loginid = sessionStorage.getItem('loggedUserid');
    this.profile.action = "user_profile_data"
    this.profile.user_id = this.loginid;
    this.profileservice.profile(this.profile).subscribe(
      response => {
        this.res = response;
        this.profile = this.res.user_profile_data[0];
      }
    );
  }

  updateprofile() {
    this.profile.action = "profile_update";
    this.profile.user_id = this.loginid;
    this.profileservice.updateprofile(this.profile).subscribe(
      response => {
        this.res = response;
        if (this.res.response[0].type == 'success') {
          this.toastr.success(this.res.response[0].message, '', { timeOut: 4000 });
        }
        else {
          this.toastr.error(this.res.response[0].message, '', { timeOut: 4000 });
        }
      }
    )
  }

}
