import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMaiaXComponent } from './about-maia-x.component';

describe('AboutMaiaXComponent', () => {
  let component: AboutMaiaXComponent;
  let fixture: ComponentFixture<AboutMaiaXComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutMaiaXComponent]
    });
    fixture = TestBed.createComponent(AboutMaiaXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
