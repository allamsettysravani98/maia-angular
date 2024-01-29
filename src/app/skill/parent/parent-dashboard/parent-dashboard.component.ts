import { Component } from '@angular/core';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-parent-dashboard',
  templateUrl: './parent-dashboard.component.html',
  styleUrls: ['./parent-dashboard.component.css'],
})
export class ParentDashboardComponent {
  constructor(public _loginservice: LoginService) {}
  isClickable: boolean = true;
  ngOnInit() {
    this._loginservice.dashboard = '';
  }
}
