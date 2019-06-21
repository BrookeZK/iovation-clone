import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstArticleComponent } from './first-article.component';

describe('FirstArticleComponent', () => {
  let component: FirstArticleComponent;
  let fixture: ComponentFixture<FirstArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
