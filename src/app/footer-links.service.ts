import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FooterLinksService {
  links: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.links = database.list('footer-links');
   }

  getLinks() {
    return this.links;
  }
}
