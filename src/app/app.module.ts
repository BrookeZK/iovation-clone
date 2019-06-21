import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomePageArticlesComponent } from './home-page-articles/home-page-articles.component';
import { FirstArticleComponent } from './first-article/first-article.component';
import { SecondArticleComponent } from './second-article/second-article.component';
import { FraudDetectionPreventionComponent } from './fraud-detection-prevention/fraud-detection-prevention.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { ThirdArticleComponent } from './third-article/third-article.component';
import { FourthArticleComponent } from './fourth-article/fourth-article.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomePageArticlesComponent,
    FirstArticleComponent,
    SecondArticleComponent,
    FraudDetectionPreventionComponent,
    HomepageComponent,
    FooterComponent,
    ThirdArticleComponent,
    FourthArticleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
