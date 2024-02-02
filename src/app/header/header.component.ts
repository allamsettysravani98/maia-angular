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
  lang: any;
  constructor(
    private router: Router,
    public _loginservice: LoginService,
    private translateService: TranslateService
  ) {
    if (sessionStorage.getItem('sessionlang') != null) {
      this.lang = sessionStorage.getItem('sessionlang');
      if (this.lang == 'en') {
        translateService.setDefaultLang(this.lang);
        this.language = 'English';
      }
      if (this.lang == 'fr') {
        translateService.setDefaultLang(this.lang);
        this.language = 'French';
      }
      if (this.lang == 'de') {
        translateService.setDefaultLang(this.lang);
        this.language = 'German';
      }
      if (this.lang == 'nl') {
        translateService.setDefaultLang(this.lang);
        this.language = 'Dutch';
      }
    } else {
      translateService.setDefaultLang('en');
      sessionStorage.setItem('sessionlang', 'en');
      this.language = 'English';
    }
  }

  switchLanguage(): void {
    const selectedLang = (
      document.getElementById('language') as HTMLSelectElement
    ).value;
    this.translateService.use(selectedLang);
  }
  testLanguage(lang: any, lang_title: any) {
    console.log(lang);
    sessionStorage.setItem('sessionlang', lang);
    this.translateService.use(lang);
    this.language = lang_title;
    window.location.reload();
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
