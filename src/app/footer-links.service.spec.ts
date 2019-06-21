import { TestBed, inject } from '@angular/core/testing';

import { FooterLinksService } from './footer-links.service';

describe('FooterLinksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FooterLinksService]
    });
  });

  it('should be created', inject([FooterLinksService], (service: FooterLinksService) => {
    expect(service).toBeTruthy();
  }));
});
