import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthArticleComponent } from './fourth-article.component';

describe('FourthArticleComponent', () => {
  let component: FourthArticleComponent;
  let fixture: ComponentFixture<FourthArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
