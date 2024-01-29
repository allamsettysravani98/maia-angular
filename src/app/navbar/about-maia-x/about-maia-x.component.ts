import { Component } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { AboutMaia } from 'src/app/model/aboutmaia';
import { AboutmaiaService } from 'src/app/service/aboutmaia/aboutmaia.service';

@Component({
  selector: 'app-about-maia-x',
  templateUrl: './about-maia-x.component.html',
  styleUrls: ['./about-maia-x.component.css'],
})
export class AboutMaiaXComponent {
  sanitizedHtmlContent: SafeHtml | undefined;
  maia: AboutMaia = new AboutMaia();
  aboutmaia = [];
  htmlContent = {};

  constructor(
    private aboutmaiaservice: AboutmaiaService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.maia.action = 'cms_list';
    this.maia.page_id = 1;
    this.aboutmaiaservice.getdata(this.maia).subscribe((response) => {
      this.htmlContent = response.page_content[0].page_content;
    });
  }
}
