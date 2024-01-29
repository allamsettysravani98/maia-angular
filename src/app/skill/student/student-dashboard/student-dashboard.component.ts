import { Component } from '@angular/core';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css'],
})
export class StudentDashboardComponent {
  constructor(public _loginservice: LoginService) {}

  ngOnInit() {
    this._loginservice.dashboard = '';
  }
}
