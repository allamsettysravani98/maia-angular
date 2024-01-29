import { Component } from '@angular/core';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-school-dashboard',
  templateUrl: './school-dashboard.component.html',
  styleUrls: ['./school-dashboard.component.css'],
})
export class SchoolDashboardComponent {
  constructor(public _loginservice: LoginService) {}

  ngOnInit() {
    this._loginservice.dashboard = '';
  }
}
