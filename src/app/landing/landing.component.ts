import { Component } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import {
  NgbCarouselConfig,
  NgbCarouselModule,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';
import { landingSession, Session } from '../model/aboutmaia';
import { SliderImages } from '../model/sliderimage';
import { AboutmaiaService } from '../service/aboutmaia/aboutmaia.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [NgbCarouselConfig],
})
export class LandingComponent {
  session1: Session = new Session();
  session2: Session = new Session();
  sanitizedHtmlContent: SafeHtml | undefined;
  session: Session = new Session();
  header: Session = new Session();
  card1: any;
  card2: any;
  card3: any;
  landing_header: any;
  landindsession_2: any;

  landingsession2: landingSession = new landingSession();
  htmlContent = {};
  htmlContent1 = {};
  htmlCard1 = {};
  htmlCard2 = {};
  htmlCard3 = {};
  htmllanding_header = {};
  htmllaningsession2 = {};

  slider_image: SliderImages = new SliderImages();
  images: any = [];

  constructor(
    config: NgbCarouselConfig,
    private aboutmaiaservice: AboutmaiaService
  ) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit() {
    this.getsession1();
    this.getsession2();
    this.getsliderimages();
    this.getlandindcard1();
    this.getlandindcard2();
    this.getlandindcard3();
    this.getlanding_header();
    this.getlandindsession2();
  }

  //
  getlanding_header() {
    this.header.action = 'landing_page_cms_list_1';
    this.header.id = 1;
    this.aboutmaiaservice.getSession(this.header).subscribe((response) => {
      this.landing_header = response.content[0];
      this.htmllanding_header = response.content[0].description;
    });
  }

  getlandindcard1() {
    this.session.action = 'landing_page_cms_list_1';
    this.session.id = 3;
    this.aboutmaiaservice.getSession(this.session).subscribe((response) => {
      this.card1 = response.content[0];
      this.htmlCard1 = response.content[0].description;
    });
  }

  getlandindcard2() {
    this.session.action = 'landing_page_cms_list_1';
    this.session.id = 4;
    this.aboutmaiaservice.getSession(this.session).subscribe((response) => {
      this.card2 = response.content[0];
      this.htmlCard2 = response.content[0].description;
    });
  }

  getlandindcard3() {
    this.session.action = 'landing_page_cms_list_1';
    this.session.id = 5;
    this.aboutmaiaservice.getSession(this.session).subscribe((response) => {
      this.card3 = response.content[0];
      this.htmlCard3 = response.content[0].description;
    });
  }

  getlandindsession2() {
    this.landingsession2.action = 'landing_page_cms_list_2';
    this.landingsession2.id = 2;
    this.aboutmaiaservice
      .getdata(this.landingsession2)
      .subscribe((response) => {
        this.htmllaningsession2 = response.content[0].description;
        this.landindsession_2 = response.content[0];
      });
  }

  getsession1() {
    this.session1.action = 'home_page_cms_list';

    this.session1.id = 1;

    this.aboutmaiaservice.getSession(this.session1).subscribe((response) => {
      console.log(response);
      this.session1 = response.content[0];
      this.htmlContent = response.content[0].description;
    });
  }

  getsession2() {
    this.session2.action = 'home_page_cms_list';

    this.session2.id = 2;

    this.aboutmaiaservice.getSession(this.session2).subscribe((response) => {
      console.log(response);
      this.session2 = response.content[0];
      this.htmlContent1 = response.content[0].description;
    });
  }

  getsliderimages() {
    this.slider_image.action = 'banner_image_list';
    this.aboutmaiaservice
      .getsliderimages(this.slider_image)
      .subscribe((response) => {
        this.images = response.banner_image_list;
      });
  }
}
