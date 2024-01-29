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

  maia: AboutMaia = new AboutMaia();

  aboutmaia: any;

  htmlContent: any;

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
  constructor(
    private aboutmaiaservice: AboutmaiaService,

    private footerservice: FooterService,

    private sanitizer: DomSanitizer,

    private router: Router
  ) {}

  ngOnInit() {
    this.footer.action = 'footer_links';

    this.footerservice.getlist(this.footer).subscribe((response) => {
      this.footer_data = response;
    });
  }

  getaboutmaia() {
    this.maia.action = 'cms_list';
    this.maia.page_id = 1;
    this.aboutmaiaservice.getdata(this.maia).subscribe((response) => {
      this.htmlContent = response.page_content[0].page_content;
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

  getaboutsolid() {
    this.maia.action = 'cms_list';
    this.maia.page_id = 2;
    this.aboutmaiaservice.getdata(this.maia).subscribe((response) => {
      this.htmlContent = response.page_content[0].page_content;
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
    this.session.action = 'landing_page_cms_list_1';
    this.session.id = 1;
    this.aboutmaiaservice.getSession(this.session).subscribe((response) => {
      console.log(response);
      this.session = response.content[0];
      this.htmlContent = response.content[0].description;
      this.isfooterButtonVisible = false;
      this.isButtonVisible = true;
      this.pagename = 'landing_header';
      this.issessionHeaderVisible = true;
      this.issessionHeader1Visible = false;
      this.card = true;
      this.slider = false;
    });
  }

  getlandindcard(id: any) {
    this.session.action = 'landing_page_cms_list_1';
    this.session.id = id;
    this.aboutmaiaservice.getSession(this.session).subscribe((response) => {
      console.log(response);
      this.session = response.content[0];
      this.htmlContent = response.content[0].description;
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

  getlandindsession2() {
    this.landingsession2.action = 'landing_page_cms_list_2';
    this.landingsession2.id = 2;
    this.aboutmaiaservice
      .getdata(this.landingsession2)
      .subscribe((response) => {
        this.htmlContent = response.content[0].description;
        this.landingsession2 = response.content[0];
        this.isfooterButtonVisible = false;
        this.pagename = 'landing_session2';
        this.isButtonVisible = true;
        this.issessionHeaderVisible = false;
        this.issessionHeader1Visible = true;
        this.card = true;
        this.slider = false;
      });
  }
  //
  getsession1() {
    this.session.action = 'home_page_cms_list';
    this.session.id = 1;
    this.aboutmaiaservice.getSession(this.session).subscribe((response) => {
      console.log(response);
      this.session = response.content[0];
      this.htmlContent = response.content[0].description;
      this.isfooterButtonVisible = false;
      this.isButtonVisible = true;
      this.pagename = 'session-1';
      this.issessionHeaderVisible = true;
      this.issessionHeader1Visible = false;
      this.card = true;
      this.slider = false;
    });
  }

  getsession2() {
    this.session.action = 'home_page_cms_list';
    this.session.id = 2;
    this.aboutmaiaservice.getSession(this.session).subscribe((response) => {
      console.log(response);
      this.session = response.content[0];
      this.htmlContent = response.content[0].description;
      this.isfooterButtonVisible = false;
      this.isButtonVisible = true;
      this.pagename = 'session-2';
      this.issessionHeaderVisible = true;
      this.issessionHeader1Visible = false;
      this.card = true;
      this.slider = false;
    });
  }

  update(pagename: any) {
    console.log(pagename);
    if (pagename == 'About Maia') {
      this.maia.action = 'cms_update';
      this.maia.page_id = 1;
      this.maia.page_content = this.htmlContent;
      this.aboutmaiaservice.postdata(this.maia).subscribe((response) => {
        this.htmlContent = '';
        this.isButtonVisible = false;
        this.isfooterButtonVisible = false;
        this.issessionHeaderVisible = false;
        this.issessionHeader1Visible = false;
        this.card = true;
        this.slider = false;
        this.getaboutmaia();
      });
    } else if (pagename == 'About Solid') {
      this.maia.action = 'cms_update';
      this.maia.page_id = 2;
      this.maia.page_content = this.htmlContent;
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
      //
      const formData = new FormData();
      // Append number field as a string
      formData.append('action', this.landingsession2.action.toString());
      formData.append('id', this.landingsession2.id.toString());
      formData.append('heading', this.landingsession2.heading.toString());
      formData.append(
        'description',
        this.landingsession2.description.toString()
      );
      formData.append('heading2', this.landingsession2.heading2);

      this.aboutmaiaservice.postdata(formData).subscribe((response) => {
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
      const formData = new FormData();
      // Append number field as a string
      formData.append('action', this.session.action.toString());
      formData.append('id', this.session.id.toString());
      formData.append('heading', this.session.heading.toString());
      formData.append('description', this.session.description.toString());
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
      const formData = new FormData();
      // Append number field as a string
      formData.append('action', this.session.action.toString());
      formData.append('id', this.session.id.toString());
      formData.append('heading', this.session.heading.toString());
      formData.append('description', this.session.description.toString());
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
      const formData = new FormData();
      // Append number field as a string
      formData.append('action', this.session.action.toString());
      formData.append('id', this.session.id.toString());
      formData.append('heading', this.session.heading.toString());
      formData.append('description', this.session.description.toString());
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
      const formData = new FormData();
      // Append number field as a string
      formData.append('action', this.session.action.toString());
      formData.append('id', this.session.id.toString());
      formData.append('heading', this.session.heading.toString());
      formData.append('description', this.session.description.toString());
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
      const formData = new FormData();
      // Append number field as a string
      formData.append('action', this.session.action.toString());
      formData.append('id', this.session.id.toString());
      formData.append('heading', this.session.heading.toString());
      formData.append('description', this.session.description.toString());
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
      const formData = new FormData();
      // Append number field as a string
      formData.append('action', this.session.action.toString());
      formData.append('id', this.session.id.toString());
      formData.append('heading', this.session.heading.toString());
      formData.append('description', this.session.description.toString());
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
