import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondArticleComponent } from './second-article.component';

describe('SecondArticleComponent', () => {
  let component: SecondArticleComponent;
  let fixture: ComponentFixture<SecondArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
