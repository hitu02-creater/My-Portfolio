import { Component, NgModule, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  activeSection = 'home';

  @HostListener('window:scroll', [])
  onScroll() {
    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
      const top = window.scrollY;
      const offset = section.offsetTop - 120;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (top >= offset && top < offset + height) {
        this.activeSection = id || '';
      }
    });
  }

  // homeburgger section
  isMenuOpen = false;
  isScrolled = false;

  // Toggle the mobile menu
  toggleOption() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Close menu when a link is clicked
  closeMenu() {
    this.isMenuOpen = false;
  }

  // Listen for scroll to change navbar background
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

}
