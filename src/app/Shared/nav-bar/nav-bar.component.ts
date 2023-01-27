import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    window.onscroll = function () {
      const navbar = document.getElementById('navbar');
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        if (navbar) {
          navbar.classList.add('hide');
        }
      } else {
        if (navbar) {
          navbar.classList.remove('hide');
        }
      }
    };
  }
}
