import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdArticleComponent } from './third-article.component';

describe('ThirdArticleComponent', () => {
  let component: ThirdArticleComponent;
  let fixture: ComponentFixture<ThirdArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
