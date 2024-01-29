import { Component } from '@angular/core';
import { LoginService } from '../service/login/login.service';

@Component({
  selector: 'app-main-landing',
  templateUrl: './main-landing.component.html',
  styleUrls: ['./main-landing.component.css'],
})
export class MainLandingComponent {
  status: any;

  constructor(public _loginservice: LoginService) {}

  ngOnInit() {
    this.status = sessionStorage.getItem('status');
    if (this.status == 'success') {
      this._loginservice.dashboard = 'Dashboard';
    }
  }
}
