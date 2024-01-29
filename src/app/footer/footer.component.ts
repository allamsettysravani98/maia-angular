import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterMaia } from '../model/footer';
import { FooterService } from '../service/footer/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  footer: FooterMaia = new FooterMaia();
  footer_data: any = [];
  count: any;
  isClickable: boolean = true;

  constructor(private footerservice: FooterService, private router: Router) {}

  ngOnInit() {
    this.footer.action = 'footer_links';
    this.footerservice.getlist(this.footer).subscribe((response) => {
      this.footer_data = response;
    });
    this.count = 0;
  }

  sendId(page_id: any) {
    console.log(this.count);
    if (this.count == 0) {
      this.count = null;
      sessionStorage.setItem('footerid', page_id);
      this.router.navigate(['/footer']);
    } else {
      sessionStorage.setItem('footerid', page_id);
      this.router.navigate(['/footer']);
      window.location.reload();
    }
  }
}
