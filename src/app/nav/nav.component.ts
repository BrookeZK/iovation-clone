import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  ngOnInit(): void {
    $(document).ready(function(){
      $(window).scroll(function(){
        if($(window).scrollTop()>10){
          $('ul').addClass('white');
          $("#menu-img").attr("src","../assets/hamburger-icon-teal.png");
          $('#logo-img').attr("src","../assets/iovation-logo-white-transparent.png");
        }else{
          $('ul').removeClass('white');
          $("#menu-img").attr("src","../assets/hamburger-icon-white.png");
          $('#logo-img').attr("src","../assets/iovation-logo-teal-transparent.png");
        }
      });
    });
  }
}
