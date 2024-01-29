import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'https://maia.insoft.in/maia-api/module';

  loginbutton: any;
  registerbutton: any;
  dashboard: any;
  userName: any;
  show: boolean | undefined;

  button(status: any, userName: any) {
    if (status == 'success') {
      // this.loginbutton = ' / Logout';
      // this.registerbutton = '';
      // this.userName = userName;
      this.show = true;
    } else {
      this.show = false;
      // this.loginbutton = 'LogIn';
      // this.registerbutton = '/ Register';
      // this.userName = '';
      // this.dashboard = '';
    }
  }

  login(login: any) {
    return this.http.post<any>(`${this.apiUrl}`, login);
  }

  changepw(changepw: any) {
    return this.http.post<any>(`${this.apiUrl}`, changepw);
  }

  forgotpw(forgotpw: any) {
    return this.http.post<any>(`${this.apiUrl}`, forgotpw);
  }
}
