import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnergyModule } from './energy/energy.module';
import { FinancialModule } from './financial/financial.module';
import { HealthModule } from './health/health.module';
import { ParentModule } from './skill/parent/parent.module';
import { SchoolModule } from './skill/school/school.module';
import { SkillModule } from './skill/skill.module';
import { StudentModule } from './skill/student/student.module';
import { TeacherModule } from './skill/teacher/teacher.module';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainLandingComponent } from './main-landing/main-landing.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutMaiaXComponent } from './navbar/about-maia-x/about-maia-x.component';
import { AboutSolidComponent } from './navbar/about-solid/about-solid.component';
import { NewsComponent } from './navbar/news/news.component';
import { BlogComponent } from './navbar/blog/blog.component';
import { FaqComponent } from './navbar/faq/faq.component';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
// import { UserdetailsComponent } from './userdetails/userdetails.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AdminModule } from './admin/admin.module';
import { FooterCardComponent } from './navbar/footer-card/footer-card.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { TranslationService } from './service/translation.service';
// import { FootertwoComponent } from './footertwo/footertwo.component';
// import { FilterPipe } from './filter/filter.pipe';
// import { FilterPipe } from './filter.pipe';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslationService } from './service/translation.service';
import { TabsModule} from 'ngx-bootstrap/tabs'; 
// import { TranslationService } from './translation.service';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    MainLandingComponent,
    ForgotPasswordComponent,
    LoginComponent,
    RegisterComponent,
    AboutMaiaXComponent,
    AboutSolidComponent,
    NewsComponent,
    BlogComponent,
    FaqComponent,
    BreadcrumbComponent,
    ChangePasswordComponent,
    ProfileComponent,
    UserdetailsComponent,
    FooterCardComponent,
    LandingComponent,
    HeaderComponent,
    // FootertwoComponent,
    // FilterPipe,
    // UserdetailsComponent,
  ],
  imports: [
    TranslateModule,
    BrowserModule,
    AngularEditorModule,
    NgbModule,
    SkillModule,
    ParentModule,
    SchoolModule,
    StudentModule,
    TeacherModule,
    EnergyModule,
    FinancialModule,
    HealthModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    ToastrModule.forRoot(),
    NgxSmartModalModule.forRoot(),
  ],
  providers: [NgxSmartModalService, RouterModule, TranslationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
