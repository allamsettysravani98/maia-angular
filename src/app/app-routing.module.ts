import { NgModule } from '@angular/core';
import { AboutMaiaXComponent } from './navbar/about-maia-x/about-maia-x.component';
import { MainLandingComponent } from './main-landing/main-landing.component';
import { AboutSolidComponent } from './navbar/about-solid/about-solid.component';
import { NewsComponent } from './navbar/news/news.component';
import { BlogComponent } from './navbar/blog/blog.component';
import { FaqComponent } from './navbar/faq/faq.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SchoolDashboardComponent } from './skill/school/school-dashboard/school-dashboard.component';
import { ParentDashboardComponent } from './skill/parent/parent-dashboard/parent-dashboard.component';
import { StudentDashboardComponent } from './skill/student/student-dashboard/student-dashboard.component';
import { TeacherDashboardComponent } from './skill/teacher/teacher-dashboard/teacher-dashboard.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { UserDataComponent } from './admin/user-data/user-data.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminSettingComponent } from './admin/admin-setting/admin-setting.component';
import { FooterCardComponent } from './navbar/footer-card/footer-card.component';
import { LandingComponent } from './landing/landing.component';
// import { UserdetailsComponent } from './userdetails/userdetails.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  {
    path: 'landing',
    component: LandingComponent,
  },
  {
    path: 'home',
    component: MainLandingComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { breadcrumb: 'Rigister' },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { breadcrumb: 'Login' },
  },
  {
    path: 'about-maia-x',
    component: AboutMaiaXComponent,
    data: { breadcrumb: 'About-maia-x' },
  },
  {
    path: 'aboutSolid',
    component: AboutSolidComponent,
    data: { breadcrumb: 'AboutSolid' },
  },
  {
    path: 'news',
    component: NewsComponent,
    data: { breadcrumb: 'News' },
  },
  {
    path: 'blog',
    component: BlogComponent,
    data: { breadcrumb: 'Blog' },
  },
  {
    path: 'changePassword',
    component: ChangePasswordComponent,
    data: { breadcrumb: 'Change Password' },
  },
  {
    path: 'forgotpassword',
    component: ForgotPasswordComponent,
    data: { breadcrumb: 'Forgot Password' },
  },
  {
    path: 'faq',
    component: FaqComponent,
    data: { breadcrumb: 'Faq' },
  },
  {
    path: 'userdata',
    component: UserDataComponent,
    data: { breadcrumb: 'UserData' },
  },
  {
    path: 'footer',
    component: FooterCardComponent,
    data: { breadcrumb: '' },
  },
  // {
  //   path: 'userdetails',
  //   component: UserdetailsComponent,
  //   data: { breadcrumb: 'userdetails' },
  // },
  //School
  {
    path: 'school-dashboard',
    data: { breadcrumb: 'Dashboard' },
    children: [
      {
        path: '',
        component: SchoolDashboardComponent,
        data: { breadcrumb: '' },
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: { breadcrumb: 'Profile' },
      },
    ],
  },
  // Parent
  {
    path: 'parent-dashboard',
    data: { breadcrumb: 'Dashboard' },
    children: [
      {
        path: '',
        component: ParentDashboardComponent,
        data: { breadcrumb: '' },
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: { breadcrumb: 'Profile' },
      },
    ],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: { breadcrumb: 'Profile' },
  },
  // Teacher
  {
    path: 'student-dashboard',
    data: { breadcrumb: 'Dashboard' },
    children: [
      {
        path: '',
        component: StudentDashboardComponent,
        data: { breadcrumb: '' },
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: { breadcrumb: 'Profile' },
      },
    ],
  },
  // Teacher
  {
    path: 'teacher-dashboard',
    data: { breadcrumb: 'Dashboard' },
    children: [
      {
        path: '',
        component: TeacherDashboardComponent,
        data: { breadcrumb: '' },
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: { breadcrumb: 'Profile' },
      },
    ],
  },

  {
    path: 'admin-dashboard',
    data: { breadcrumb: 'Dashboard' },
    children: [
      {
        path: '',
        component: AdminDashboardComponent,
        data: { breadcrumb: '' },
      },
      {
        path: 'userdata',
        component: UserDataComponent,
        data: { breadcrumb: 'UserData' },
      },
      {
        path: 'settings',
        component: AdminSettingComponent,
        data: { breadcrumb: 'Settings' },
      },
    ],
  },

  // {
  //   path: 'school-profile',
  //   component: SchoolProfileComponent,
  // },
  // {
  //   path: 'parent-profile',
  //   component: ParentProfileComponent,
  // },
  // {
  //   path: 'student-profile',
  //   component: StudentProfileComponent,
  // },
  //
  // {
  //   path: 'teacher-profile',
  //   component: TeacherProfileComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
