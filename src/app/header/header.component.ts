import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from '../mock-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'CX Cloud';
  categories = CATEGORIES;

  // Brand navbar
  brandMenu = [
    {name: 'LogIn', icon: 'mdi-account'},
    {name: 'Cart', icon: 'mdi-cart'}
  ];

  constructor() { }

  ngOnInit() {
    this.onToggleMenu();
  }
  onToggleMenu() {
    document.addEventListener('DOMContentLoaded', function () {
      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
          $el.addEventListener('click', function () {

            // Get the target from the "data-target" attribute
            const target = $el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the class on both the "navbar-burger" and the "navbar-menu"
            $el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

          });
        });
      }
    });
  }

}
