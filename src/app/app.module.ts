import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomePageArticlesComponent } from './home-page-articles/home-page-articles.component';
import { FirstArticleComponent } from './first-article/first-article.component';
import { SecondArticleComponent } from './second-article/second-article.component';
import { FraudDetectionPreventionComponent } from './fraud-detection-prevention/fraud-detection-prevention.component';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomePageArticlesComponent,
    FirstArticleComponent,
    SecondArticleComponent,
    FraudDetectionPreventionComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
