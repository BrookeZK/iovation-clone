import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomePageArticlesComponent } from './home-page-articles/home-page-articles.component';
import { FirstArticleComponent } from './first-article/first-article.component';
import { SecondArticleComponent } from './second-article/second-article.component';
import { ThirdArticleComponent } from './third-article/third-article.component';
import { FourthArticleComponent } from './fourth-article/fourth-article.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomePageArticlesComponent,
    FirstArticleComponent,
    SecondArticleComponent,
    ThirdArticleComponent,
    FourthArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
