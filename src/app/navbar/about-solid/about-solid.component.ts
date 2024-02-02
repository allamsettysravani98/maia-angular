import { Component } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { AboutMaia } from 'src/app/model/aboutmaia';
import { AboutmaiaService } from 'src/app/service/aboutmaia/aboutmaia.service';

@Component({
  selector: 'app-about-solid',
  templateUrl: './about-solid.component.html',
  styleUrls: ['./about-solid.component.css'],
})
export class AboutSolidComponent {
  sanitizedHtmlContent: SafeHtml | undefined;
  solid: AboutMaia = new AboutMaia();
  aboutsolid = [];
  htmlContent = {};
  lang: any;

  constructor(private aboutsolidservice: AboutmaiaService) {}

  ngOnInit() {
    this.lang = sessionStorage.getItem('sessionlang');
    this.solid.action = 'cms_list';
    this.solid.page_id = 2;
    this.solid.lan = this.lang;
    this.aboutsolidservice.getdata(this.solid).subscribe((response) => {
      this.htmlContent = response.page_content[0].page_content;
    });
  }
}
