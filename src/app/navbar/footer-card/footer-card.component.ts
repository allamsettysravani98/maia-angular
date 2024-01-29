import { Component } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { FooterMaia } from 'src/app/model/footer';
import { FooterService } from 'src/app/service/footer/footer.service';

@Component({
  selector: 'app-footer-card',
  templateUrl: './footer-card.component.html',
  styleUrls: ['./footer-card.component.css'],
})
export class FooterCardComponent {
  footer: FooterMaia = new FooterMaia();
  sanitizedHtmlContent: SafeHtml | undefined;
  htmlContent = {};
  page_id: any;
  constructor(
    private footerservice: FooterService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.page_id = sessionStorage.getItem('footerid');
    this.footer.action = 'cms_list_footer_page';
    this.footer.page_id = this.page_id;
    this.footerservice.getById(this.footer).subscribe((response) => {
      this.footer = response.page_content[0];
      this.htmlContent = response.page_content[0].page_content;
    });
  }
}
