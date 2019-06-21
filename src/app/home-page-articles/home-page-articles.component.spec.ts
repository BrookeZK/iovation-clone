import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageArticlesComponent } from './home-page-articles.component';

describe('HomePageArticlesComponent', () => {
  let component: HomePageArticlesComponent;
  let fixture: ComponentFixture<HomePageArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
