import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from '../service/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  showDropdown: boolean = false;
  status: any;
  user_role: any;
  username: any;
  language: any;
  constructor(
    private router: Router,
    public _loginservice: LoginService,
    private translateService: TranslateService
  ) {
    translateService.setDefaultLang('en');
    this.language = 'English';
  }

  switchLanguage(): void {
    const selectedLang = (
      document.getElementById('language') as HTMLSelectElement
    ).value;
    this.translateService.use(selectedLang);
  }
  testLanguage(lang: any, lang_title: any) {
    console.log(lang);
    this.translateService.use(lang);
    this.language = lang_title;
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  ngOnInit() {
    this.status = sessionStorage.getItem('status');
    this.username = sessionStorage.getItem('username');
    this._loginservice.button(this.status, this.username);
  }

  viewProfile() {
    this.router.navigate(['']);
    // Add logic to handle viewing the profile
    console.log('View Profile clicked');
  }
  dashboard() {
    this.user_role = sessionStorage.getItem('userrole');
    if (this.user_role == '1') {
      this.router.navigate(['/school-dashboard']);
    } else if (this.user_role == '2') {
      this.router.navigate(['/teacher-dashboard']);
    } else if (this.user_role == '3') {
      this.router.navigate(['/student-dashboard']);
    } else if (this.user_role == '4') {
      this.router.navigate(['/parent-dashboard']);
    } else if (this.user_role == '5') {
      this.router.navigate(['/admin-dashboard']);
    }
  }

  logout() {
    this.router.navigate(['/']);
    this._loginservice.show = false;
    sessionStorage.clear();
    // Add logic to handle logout
    console.log('Logout clicked');
  }
}
