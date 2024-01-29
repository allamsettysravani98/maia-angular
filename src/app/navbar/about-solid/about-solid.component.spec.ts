import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSolidComponent } from './about-solid.component';

describe('AboutSolidComponent', () => {
  let component: AboutSolidComponent;
  let fixture: ComponentFixture<AboutSolidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutSolidComponent]
    });
    fixture = TestBed.createComponent(AboutSolidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
