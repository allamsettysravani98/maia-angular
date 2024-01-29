import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslationService } from 'src/app/service/translation.service';
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [TeacherDashboardComponent, TeacherProfileComponent],
  imports: [
    CommonModule, 
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule,
    TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient],
    },
  }),
],
providers: [TranslationService],

})
export class TeacherModule {}
