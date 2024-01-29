import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from '../model/register';
import { ProfileService } from '../service/profile/profile.service';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { window } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  loginid: any;
  res: any = {};
  isClickable: boolean = true;
  profile: User = new User();

  constructor(
    private profileservice: ProfileService,
    private toastr: ToastrService
  ) {}

  onFileChanged(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.profile.profile_img = file;
      console.log(this.profile.profile_img);
    }
  }

  ngOnInit() {
    this.loginid = sessionStorage.getItem('loggedUserid');
    this.profile.action = 'user_profile_data';
    this.profile.user_id = this.loginid;
    this.profileservice.profile(this.profile).subscribe((response) => {
      this.res = response;
      this.profile = this.res.user_profile_data[0];
    });
  }

  updateprofile() {
    // window.location.reload();
    console.log(this.profile.profile_img);
    this.profile.action = 'profile_update';
    this.profile.user_id = this.loginid;
    const formData = new FormData();
    // Append number field as a string
    formData.append('action', this.profile.action.toString());
    formData.append('user_id', this.profile.user_id.toString());
    formData.append('register_no', this.profile.register_no.toString());
    formData.append('first_name', this.profile.first_name);
    formData.append('last_name', this.profile.last_name.toString());
    formData.append('country', this.profile.country.toString());
    formData.append('dob', this.profile.dob.toString());
    formData.append('profile_img', this.profile.profile_img);
    this.profileservice.updateprofile(formData).subscribe((response) => {
      this.res = response;
      if (this.res.response[0].type == 'success') {
        this.toastr.success(this.res.response[0].message, '', {
          timeOut: 4000,
        });
      } else {
        this.toastr.error(this.res.response[0].message, '', { timeOut: 4000 });
      }
      window.location.reload();
    });

    // this.ngOnInit();
    // window.location.reload();
  }
}
