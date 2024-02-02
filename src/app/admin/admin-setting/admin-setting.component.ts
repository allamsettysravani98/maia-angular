import { Component } from '@angular/core';

import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

import { Router } from '@angular/router';

import { AboutMaia, landingSession, Session } from 'src/app/model/aboutmaia';

import { FooterMaia } from 'src/app/model/footer';
import { SliderImages } from 'src/app/model/sliderimage';

import { AboutmaiaService } from 'src/app/service/aboutmaia/aboutmaia.service';

import { FooterService } from 'src/app/service/footer/footer.service';

@Component({
  selector: 'app-admin-setting',

  templateUrl: './admin-setting.component.html',

  styleUrls: ['./admin-setting.component.css'],
})
export class AdminSettingComponent {
  sanitizedHtmlContent: SafeHtml | undefined;
  active: boolean | undefined;

  maia: AboutMaia = new AboutMaia();

  aboutmaia: any;

  htmlContent: any;
  htmlContentfr: any;
  htmlContentnl: any;
  htmlContentde: any;

  isfooterButtonVisible: boolean = false;

  issessionHeaderVisible: boolean = false;

  issessionHeader1Visible: boolean = false;

  isButtonVisible: boolean = false;

  card: boolean = true;

  slider: boolean = false;

  footer: FooterMaia = new FooterMaia();

  pagename: any;

  pageid: any;

  footer_data: any = [];

  session: Session = new Session();

  landingsession2: landingSession = new landingSession();

  images: any = [];
  slider_image: SliderImages = new SliderImages();
  sliderimages: any;

  lang: any;
  function_name: any;
  items: string[] = ['en', 'nl', 'de', 'fr'];

  constructor(
    private aboutmaiaservice: AboutmaiaService,

    private footerservice: FooterService,

    private sanitizer: DomSanitizer,

    private router: Router
  ) {}

  ngOnInit() {
    this.lang = 'en';
    this.footer.action = 'footer_links';

    this.footerservice.getlist(this.footer).subscribe((response) => {
      this.footer_data = response;
    });
  }

  getaboutmaia(lang: any) {
    // console.log(lang);
    // this.lang = lang;
    for (let i = 0; i < this.items.length; i++) {
      console.log(this.items[i]);
      this.function_name = 'getaboutmaia';
      this.maia.action = 'cms_list';
      this.maia.page_id = 1;
      this.maia.lan = this.items[i];
      this.aboutmaiaservice.getdata(this.maia).subscribe((response) => {
        if (response.page_content[0].lan == 'en') {
          this.htmlContent = response.page_content[0].page_content;
        } else if (response.page_content[0].lan == 'fr') {
          this.htmlContentfr = response.page_content[0].page_content;
        } else if (response.page_content[0].lan == 'nl') {
          this.htmlContentnl = response.page_content[0].page_content;
        } else if (response.page_content[0].lan == 'de') {
          this.htmlContentde = response.page_content[0].page_content;
        }
        this.aboutmaia = response.page_content[0];
        this.pagename = this.aboutmaia.page_name;
        this.isButtonVisible = true;
        this.isfooterButtonVisible = false;
        this.issessionHeaderVisible = false;
        this.issessionHeader1Visible = false;
        this.card = true;
        this.slider = false;
      });
    }
  }

  getaboutsolid() {
    // console.log(lang);
    // this.lang = lang;
    for (let i = 0; i < this.items.length; i++) {
      console.log(this.items[i]);

      this.function_name = 'getaboutsolid';
      this.maia.action = 'cms_list';
      this.maia.page_id = 2;
      this.maia.lan = this.items[i];
      this.aboutmaiaservice.getdata(this.maia).subscribe((response) => {
        if (response.page_content[0].lan == 'en') {
          this.htmlContent = response.page_content[0].page_content;
        } else if (response.page_content[0].lan == 'fr') {
          this.htmlContentfr = response.page_content[0].page_content;
        } else if (response.page_content[0].lan == 'nl') {
          this.htmlContentnl = response.page_content[0].page_content;
        } else if (response.page_content[0].lan == 'de') {
          this.htmlContentde = response.page_content[0].page_content;
        }
        this.aboutmaia = response.page_content[0];
        this.pagename = this.aboutmaia.page_name;
        this.isButtonVisible = true;
        this.isfooterButtonVisible = false;
        this.issessionHeaderVisible = false;
        this.issessionHeader1Visible = false;
        this.card = true;
        this.slider = false;
      });
    }
  }

  getfootercontent(page_id: any) {
    this.footer.action = 'cms_list_footer_page';
    this.footer.page_id = page_id;
    this.pageid = page_id;
    this.footerservice.getById(this.footer).subscribe((response) => {
      this.footer = response.page_content[0];
      this.htmlContent = response.page_content[0].page_content;
      this.isfooterButtonVisible = true;
      this.isButtonVisible = false;
      this.issessionHeaderVisible = false;
      this.issessionHeader1Visible = false;
      this.card = true;
      this.slider = false;
    });
  }
  //
  getlanding_header() {
    for (let i = 0; i < this.items.length; i++) {
      this.session.action = 'landing_page_cms_list_1';
      this.session.id = 1;
      this.session.lan = this.items[i];
      this.aboutmaiaservice.getSession(this.session).subscribe((response) => {
        console.log(response);
        console.log(response.content[0].lan);
        if (response.content[0].lan == 'en') {
          console.log('in');
          this.htmlContent = response.content[0].description;
          this.session.heading = response.content[0].heading;
        } else if (response.content[0].lan == 'fr') {
          console.log('in');
          this.htmlContentfr = response.content[0].description;
          this.session.heading_fr = response.content[0].heading;
        } else if (response.content[0].lan == 'nl') {
          console.log('in');
          this.htmlContentnl = response.content[0].description;
          this.session.heading_nl = response.content[0].heading;
        } else if (response.content[0].lan == 'de') {
          console.log('in');
          this.htmlContentde = response.content[0].description;
          this.session.heading_de = response.content[0].heading;
        }
        this.session.image = response.content[0].image;
        this.isfooterButtonVisible = false;
        this.isButtonVisible = true;
        this.pagename = 'landing_header';
        this.issessionHeaderVisible = true;
        this.issessionHeader1Visible = false;
        this.card = true;
        this.slider = false;
      });
    }
  }

  getlandindcard(id: any) {
    for (let i = 0; i < this.items.length; i++) {
      this.session.action = 'landing_page_cms_list_1';
      this.session.id = id;
      this.session.lan = this.items[i];
      this.aboutmaiaservice.getSession(this.session).subscribe((response) => {
        console.log(response);
        // this.session = response.content[0];
        // this.htmlContent = response.content[0].description;
        if (response.content[0].lan == 'en') {
          this.htmlContent = response.content[0].description;
          this.session.heading = response.content[0].heading;
        } else if (response.content[0].lan == 'fr') {
          this.htmlContentfr = response.content[0].description;
          this.session.heading_fr = response.content[0].heading;
        } else if (response.content[0].lan == 'nl') {
          this.htmlContentnl = response.content[0].description;
          this.session.heading_nl = response.content[0].heading;
        } else if (response.content[0].lan == 'de') {
          this.htmlContentde = response.content[0].description;
          this.session.heading_de = response.content[0].heading;
        }
        this.session.image = response.content[0].image;
        this.isfooterButtonVisible = false;
        this.isButtonVisible = true;
        this.pagename = 'card-' + id;
        console.log(this.pagename);
        this.issessionHeaderVisible = true;
        this.issessionHeader1Visible = false;
        this.card = true;
        this.slider = false;
      });
    }
  }

  getlandindsession2() {
    for (let i = 0; i < this.items.length; i++) {
      this.landingsession2.action = 'landing_page_cms_list_2';
      this.landingsession2.id = 2;
      this.landingsession2.lan = this.items[i];
      this.aboutmaiaservice
        .getdata(this.landingsession2)
        .subscribe((response) => {
          if (response.content[0].lan == 'en') {
            this.htmlContent = response.content[0].description;
            this.landingsession2.heading = response.content[0].heading;
            this.landingsession2.heading2 = response.content[0].heading2;
          } else if (response.content[0].lan == 'fr') {
            this.htmlContentfr = response.content[0].description;
            this.landingsession2.heading_fr = response.content[0].heading;
            this.landingsession2.heading2_fr = response.content[0].heading2;
          } else if (response.content[0].lan == 'nl') {
            this.htmlContentnl = response.content[0].description;
            this.landingsession2.heading_nl = response.content[0].heading;
            this.landingsession2.heading2_nl = response.content[0].heading2;
          } else if (response.content[0].lan == 'de') {
            this.htmlContentde = response.content[0].description;
            this.landingsession2.heading_de = response.content[0].heading;
            this.landingsession2.heading2_de = response.content[0].heading2;
          }
          this.session.image = response.content[0].image;
          this.isfooterButtonVisible = false;
          this.pagename = 'landing_session2';
          this.isButtonVisible = true;
          this.issessionHeaderVisible = false;
          this.issessionHeader1Visible = true;
          this.card = true;
          this.slider = false;
        });
    }
  }
  //
  getsession1() {
    for (let i = 0; i < this.items.length; i++) {
      this.session.action = 'home_page_cms_list';
      this.session.id = 1;
      this.session.lan = this.items[i];
      this.aboutmaiaservice.getSession(this.session).subscribe((response) => {
        console.log(response);
        if (response.content[0].lan == 'en') {
          this.htmlContent = response.content[0].description;
          this.session.heading = response.content[0].heading;
        } else if (response.content[0].lan == 'fr') {
          this.htmlContentfr = response.content[0].description;
          this.session.heading_fr = response.content[0].heading;
        } else if (response.content[0].lan == 'nl') {
          this.htmlContentnl = response.content[0].description;
          this.session.heading_nl = response.content[0].heading;
        } else if (response.content[0].lan == 'de') {
          this.htmlContentde = response.content[0].description;
          this.session.heading_de = response.content[0].heading;
        }
        this.session.image = response.content[0].image;
        this.isfooterButtonVisible = false;
        this.isButtonVisible = true;
        this.pagename = 'session-1';
        this.issessionHeaderVisible = true;
        this.issessionHeader1Visible = false;
        this.card = true;
        this.slider = false;
      });
    }
  }

  getsession2() {
    for (let i = 0; i < this.items.length; i++) {
      this.session.action = 'home_page_cms_list';
      this.session.id = 2;
      this.session.lan = this.items[i];
      this.aboutmaiaservice.getSession(this.session).subscribe((response) => {
        console.log(response);
        if (response.content[0].lan == 'en') {
          this.htmlContent = response.content[0].description;
          this.session.heading = response.content[0].heading;
        } else if (response.content[0].lan == 'fr') {
          this.htmlContentfr = response.content[0].description;
          this.session.heading_fr = response.content[0].heading;
        } else if (response.content[0].lan == 'nl') {
          this.htmlContentnl = response.content[0].description;
          this.session.heading_nl = response.content[0].heading;
        } else if (response.content[0].lan == 'de') {
          this.htmlContentde = response.content[0].description;
          this.session.heading_de = response.content[0].heading;
        }
        this.session.image = response.content[0].image;
        this.isfooterButtonVisible = false;
        this.isButtonVisible = true;
        this.pagename = 'session-2';
        this.issessionHeaderVisible = true;
        this.issessionHeader1Visible = false;
        this.card = true;
        this.slider = false;
      });
    }
  }

  update(pagename: any) {
    console.log(pagename);
    console.log(this.lang);
    if (pagename == 'About Maia') {
      this.maia.action = 'cms_update';
      this.maia.page_id = 1;
      this.maia.page_content = this.htmlContent;
      this.maia.page_content_fr = this.htmlContentfr;
      this.maia.page_content_nl = this.htmlContentnl;
      this.maia.page_content_de = this.htmlContentde;
      this.aboutmaiaservice.postdata(this.maia).subscribe((response) => {
        this.htmlContent = '';
        this.htmlContentde = '';
        this.htmlContentfr = '';
        this.htmlContentnl = '';
        this.isButtonVisible = false;
        this.isfooterButtonVisible = false;
        this.issessionHeaderVisible = false;
        this.issessionHeader1Visible = false;
        this.card = true;
        this.slider = false;
        this.getaboutmaia(this.lang);
      });
    } else if (pagename == 'About Solid') {
      this.maia.action = 'cms_update';
      this.maia.page_id = 2;
      this.maia.lan = this.lang;
      this.maia.page_content = this.htmlContent;
      this.maia.page_content_fr = this.htmlContentfr;
      this.maia.page_content_nl = this.htmlContentnl;
      this.maia.page_content_de = this.htmlContentde;
      this.aboutmaiaservice.postdata(this.maia).subscribe((response) => {
        this.htmlContent = '';
        this.isButtonVisible = false;
        this.isfooterButtonVisible = false;
        this.issessionHeaderVisible = false;
        this.issessionHeader1Visible = false;
        this.card = true;
        this.slider = false;
        this.getaboutsolid();
      });
    } else if (pagename == 'landing_session2') {
      this.landingsession2.action = 'landing_page_cms_update_2';
      this.landingsession2.id = 2;
      this.landingsession2.description = this.htmlContent;
      this.landingsession2.description_nl = this.htmlContentnl;
      this.landingsession2.description_de = this.htmlContentde;
      this.landingsession2.description_fr = this.htmlContentfr;
      //
      const formData = new FormData();
      // Append number field as a string
      formData.append('action', this.landingsession2.action.toString());
      formData.append('id', this.landingsession2.id.toString());
      formData.append('heading', this.landingsession2.heading.toString());
      formData.append('heading_nl', this.landingsession2.heading_nl.toString());
      formData.append('heading_fr', this.landingsession2.heading_fr.toString());
      formData.append('heading_de', this.landingsession2.heading_de.toString());
      formData.append('heading2', this.landingsession2.heading2.toString());
      formData.append(
        'heading2_nl',
        this.landingsession2.heading2_nl.toString()
      );
      formData.append(
        'heading2_fr',
        this.landingsession2.heading2_fr.toString()
      );
      formData.append(
        'heading2_de',
        this.landingsession2.heading2_de.toString()
      );
      formData.append(
        'description',
        this.landingsession2.description.toString()
      );
      formData.append(
        'description_nl',
        this.landingsession2.description_nl.toString()
      );
      formData.append(
        'description_fr',
        this.landingsession2.description_fr.toString()
      );
      formData.append(
        'description_de',
        this.landingsession2.description_de.toString()
      );

      this.aboutmaiaservice.postdata(formData).subscribe(() => {
        this.htmlContent = '';
        this.isButtonVisible = false;
        this.isfooterButtonVisible = false;
        this.issessionHeaderVisible = false;
        this.issessionHeader1Visible = false;
        this.card = true;
        this.slider = false;
        this.getlandindsession2();
      });
    } else if (pagename == 'session-1') {
      this.session.action = 'home_page_cms_update';
      this.session.id = 1;
      this.session.description = this.htmlContent;
      this.session.description_nl = this.htmlContentnl;
      this.session.description_de = this.htmlContentde;
      this.session.description_fr = this.htmlContentfr;
      const formData = new FormData();
      // Append number field as a string
      formData.append('action', this.session.action.toString());
      formData.append('id', this.session.id.toString());
      formData.append('heading', this.session.heading.toString());
      formData.append('heading_nl', this.session.heading_nl.toString());
      formData.append('heading_fr', this.session.heading_fr.toString());
      formData.append('heading_de', this.session.heading_de.toString());
      formData.append('description', this.session.description.toString());
      formData.append('description_nl', this.session.description_nl.toString());
      formData.append('description_fr', this.session.description_fr.toString());
      formData.append('description_de', this.session.description_de.toString());
      formData.append('image', this.session.image);

      this.aboutmaiaservice.postsession(formData).subscribe((response) => {
        console.log(response);
        this.htmlContent = '';
        this.isButtonVisible = false;
        this.isfooterButtonVisible = false;
        this.issessionHeaderVisible = false;
        this.issessionHeader1Visible = false;
        this.card = true;
        this.getsession1();
      });
    } else if (pagename == 'session-2') {
      this.session.action = 'home_page_cms_update';
      this.session.id = 2;
      this.session.description = this.htmlContent;
      this.session.description_nl = this.htmlContentnl;
      this.session.description_de = this.htmlContentde;
      this.session.description_fr = this.htmlContentfr;
      const formData = new FormData();
      // Append number field as a string
      formData.append('action', this.session.action.toString());
      formData.append('id', this.session.id.toString());
      formData.append('heading', this.session.heading.toString());
      formData.append('heading_nl', this.session.heading_nl.toString());
      formData.append('heading_fr', this.session.heading_fr.toString());
      formData.append('heading_de', this.session.heading_de.toString());
      formData.append('description', this.session.description.toString());
      formData.append('description_nl', this.session.description_nl.toString());
      formData.append('description_fr', this.session.description_fr.toString());
      formData.append('description_de', this.session.description_de.toString());
      formData.append('image', this.session.image);
      this.aboutmaiaservice.postsession(formData).subscribe((response) => {
        console.log(response);
        this.htmlContent = '';
        this.isButtonVisible = false;
        this.isfooterButtonVisible = false;
        this.issessionHeaderVisible = false;
        this.issessionHeader1Visible = false;
        this.card = true;
        this.slider = false;
        this.getsession2();
      });
    } else if (pagename == 'landing_header') {
      this.session.action = 'landing_page_cms_update_1';
      this.session.id = 1;
      this.session.description = this.htmlContent;
      this.session.description_nl = this.htmlContentnl;
      this.session.description_de = this.htmlContentde;
      this.session.description_fr = this.htmlContentfr;
      const formData = new FormData();
      // Append number field as a string
      formData.append('action', this.session.action.toString());
      formData.append('id', this.session.id.toString());
      formData.append('heading', this.session.heading.toString());
      formData.append('heading_nl', this.session.heading_nl.toString());
      formData.append('heading_de', this.session.heading_de.toString());
      formData.append('heading_fr', this.session.heading_fr.toString());
      formData.append('description', this.session.description.toString());
      formData.append('description_nl', this.session.description_nl.toString());
      formData.append('description_fr', this.session.description_fr.toString());
      formData.append('description_de', this.session.description_de.toString());
      formData.append('image', this.session.image);
      this.aboutmaiaservice.postsession(formData).subscribe((response) => {
        console.log(response);
        this.htmlContent = '';
        this.isButtonVisible = false;
        this.isfooterButtonVisible = false;
        this.issessionHeaderVisible = false;
        this.issessionHeader1Visible = false;
        this.card = true;
        this.slider = false;
        this.getlanding_header();
      });
    } else if (pagename == 'card-3') {
      this.session.action = 'landing_page_cms_update_1';
      this.session.id = 3;
      this.session.description = this.htmlContent;
      this.session.description_nl = this.htmlContentnl;
      this.session.description_de = this.htmlContentde;
      this.session.description_fr = this.htmlContentfr;
      const formData = new FormData();
      // Append number field as a string
      formData.append('action', this.session.action.toString());
      formData.append('id', this.session.id.toString());
      formData.append('heading', this.session.heading.toString());
      formData.append('heading_nl', this.session.heading_nl.toString());
      formData.append('heading_de', this.session.heading_de.toString());
      formData.append('heading_fr', this.session.heading_fr.toString());
      formData.append('description', this.session.description.toString());
      formData.append('description_nl', this.session.description_nl.toString());
      formData.append('description_fr', this.session.description_fr.toString());
      formData.append('description_de', this.session.description_de.toString());
      formData.append('image', this.session.image);
      this.aboutmaiaservice.postsession(formData).subscribe((response) => {
        console.log(response);
        this.htmlContent = '';
        this.isButtonVisible = false;
        this.isfooterButtonVisible = false;
        this.issessionHeaderVisible = false;
        this.issessionHeader1Visible = false;
        this.card = true;
        this.slider = false;
        this.getlandindcard(3);
      });
    } else if (pagename == 'card-4') {
      this.session.action = 'landing_page_cms_update_1';
      this.session.id = 4;
      this.session.description = this.htmlContent;
      this.session.description_nl = this.htmlContentnl;
      this.session.description_de = this.htmlContentde;
      this.session.description_fr = this.htmlContentfr;
      const formData = new FormData();
      // Append number field as a string
      formData.append('action', this.session.action.toString());
      formData.append('id', this.session.id.toString());
      formData.append('heading', this.session.heading.toString());
      formData.append('heading_nl', this.session.heading_nl.toString());
      formData.append('heading_de', this.session.heading_de.toString());
      formData.append('heading_fr', this.session.heading_fr.toString());
      formData.append('description', this.session.description.toString());
      formData.append('description_nl', this.session.description_nl.toString());
      formData.append('description_fr', this.session.description_fr.toString());
      formData.append('description_de', this.session.description_de.toString());
      formData.append('image', this.session.image);
      this.aboutmaiaservice.postsession(formData).subscribe((response) => {
        console.log(response);
        this.htmlContent = '';
        this.isButtonVisible = false;
        this.isfooterButtonVisible = false;
        this.issessionHeaderVisible = false;
        this.issessionHeader1Visible = false;
        this.card = true;
        this.slider = false;
        this.getlandindcard(4);
      });
    } else if (pagename == 'card-5') {
      this.session.action = 'landing_page_cms_update_1';
      this.session.id = 5;
      this.session.description = this.htmlContent;
      this.session.description_nl = this.htmlContentnl;
      this.session.description_de = this.htmlContentde;
      this.session.description_fr = this.htmlContentfr;
      const formData = new FormData();
      // Append number field as a string
      formData.append('action', this.session.action.toString());
      formData.append('id', this.session.id.toString());
      formData.append('heading', this.session.heading.toString());
      formData.append('heading_nl', this.session.heading_nl.toString());
      formData.append('heading_de', this.session.heading_de.toString());
      formData.append('heading_fr', this.session.heading_fr.toString());
      formData.append('description', this.session.description.toString());
      formData.append('description_nl', this.session.description_nl.toString());
      formData.append('description_fr', this.session.description_fr.toString());
      formData.append('description_de', this.session.description_de.toString());
      formData.append('image', this.session.image);
      this.aboutmaiaservice.postsession(formData).subscribe((response) => {
        console.log(response);
        this.htmlContent = '';
        this.isButtonVisible = false;
        this.isfooterButtonVisible = false;
        this.issessionHeaderVisible = false;
        this.issessionHeader1Visible = false;
        this.card = true;
        this.slider = false;
        this.getlandindcard(5);
      });
    }
  }

  onFileChanged(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.session.image = file;
      console.log(this.session.image);
    }
  }

  updatefooter(pageid: any) {
    console.log('test');
    this.footer.action = 'cms_update_footer_page';
    this.footer.page_id = pageid;
    this.footer.page_content = this.htmlContent;
    this.footerservice.postdata(this.footer).subscribe((response) => {
      this.htmlContent = '';
      this.isfooterButtonVisible = false;
      this.isButtonVisible = false;
      this.issessionHeaderVisible = false;
      this.card = true;
      this.slider = false;
      window.location.reload();
    });
  }

  //

  getsliderimages() {
    this.slider_image.action = 'banner_image_list';
    this.aboutmaiaservice
      .getsliderimages(this.slider_image)
      .subscribe((response) => {
        this.images = response.banner_image_list;
        this.card = false;
        this.slider = true;
      });
  }

  onImageChanged(event: any, itemId: number) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.editItem(itemId, file);
    }
  }

  Add(event: any) {
    if (event.target.files.length > 0) {
      const files = event.target.files[0];
      this.addItem(files);
    }
  }

  addItem(image: string) {
    console.log('add');
    var action = 'banner_image_add';
    const formDataadd = new FormData();
    // Append number field as a string
    formDataadd.append('action', action.toString());
    formDataadd.append('image', image);
    console.log(formDataadd);
    this.aboutmaiaservice.addsliderimages(formDataadd).subscribe((response) => {
      if (response.response[0].type == 'success') {
        this.getsliderimages();
      }
      this.card = false;
      this.slider = true;
    });
  }

  editItem(itemId: number, image: string) {
    var action = 'banner_image_update';
    const formData = new FormData();
    // Append number field as a string
    formData.append('action', action.toString());
    formData.append('id', itemId.toString());
    formData.append('image', image);

    this.aboutmaiaservice.updatesliderimages(formData).subscribe((response) => {
      if (response.response[0].type == 'success') {
        this.getsliderimages();
      }
      this.card = false;
      this.slider = true;
    });
  }

  deleteItem(itemId: number) {
    console.log(itemId);
    this.slider_image.action = 'banner_image_delete';
    this.slider_image.id = itemId;
    this.aboutmaiaservice
      .deletesliderimages(this.slider_image)
      .subscribe((response) => {
        if (response.response[0].type == 'success') {
          // this.images = response.banner_image_list;
          this.getsliderimages();
        }
        this.card = false;
        this.slider = true;
      });
  }
}
