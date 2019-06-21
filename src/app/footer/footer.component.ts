import { Component, OnInit } from '@angular/core';
import { FooterLinksService } from '../footer-links.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [FooterLinksService]
})
export class FooterComponent implements OnInit {
  links: FirebaseListObservable<any[]>;

  constructor(private footerLinkService: FooterLinksService) { }

  ngOnInit() {
    this.links = this.footerLinkService.getLinks();
  }

}
