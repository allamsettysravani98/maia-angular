import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  MinLengthValidator,
  Validators,
} from '@angular/forms';
import { RegisterService } from '../service/register/register.service';
import { User } from '../model/register';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registrationForm: any;
  res: any = {};
  registermodel: User = new User();
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private registerservice: RegisterService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      registerNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: [''],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      skill: [Validators.required],
      user_role: [Validators.required],
    });
  }

  register() {
    this.registermodel.action = 'signup';
    this.registermodel.skill = 1;
    // const formData = new FormData();

    // Append number field as a string
    // formData.append('action', this.registermodel.action.toString());
    // formData.append('skill', this.registermodel.skill.toString());
    // formData.append('register_no', this.registermodel.register_no.toString());
    // formData.append('first_name', this.registermodel.first_name);
    // formData.append('last_name', this.registermodel.last_name.toString());
    // formData.append('email', this.registermodel.email.toString());
    // formData.append('password', this.registermodel.password.toString());
    // formData.append(
    //   'confirm_password',
    //   this.registermodel.confirm_password.toString()
    // );
    // formData.append('user_role', this.registermodel.user_role.toString());
    // formData.append(
    //   'profile_img',
    //   'https://maia.insoft.in/upload/profile-img/30_maia-logo-graphical-elements-jpg.jpg'
    // );
    this.registerservice.register(this.registermodel).subscribe((response) => {
      this.res = response;
      if (this.res.response[0].type == 'success') {
        this.toastr.success(this.res.response[0].message, '', {
          timeOut: 4000,
        });
        this.router.navigate(['/login']);
      } else {
        this.toastr.error(this.res.response[0].message, '', { timeOut: 4000 });
      }
    });
  }
  //
  checkboxes: { [key: string]: boolean } = {
    skill: false,
    energy: false,
    health: false,
    financial: false,
  };

  showskillRadioOptions = true;
  showenergyRadioOptions = false;
  showhealthRadioOptions = false;
  showfinancialRadioOptions = false;

  handleskillCheckboxChange(category: string): void {
    this.showskillRadioOptions = this.checkboxes[category];
    if (this.checkboxes[category] == true) {
      this.registermodel.skill = 1;
    }
  }
  handlehelthCheckboxChange(category: string): void {
    this.showenergyRadioOptions = this.checkboxes[category];
  }
  handleenergyCheckboxChange(category: string): void {
    this.showhealthRadioOptions = this.checkboxes[category];
  }
  handlefinacialCheckboxChange(category: string): void {
    this.showfinancialRadioOptions = this.checkboxes[category];
  }
}
