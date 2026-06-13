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

    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {

      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        this.activeSection = sectionId || '';
      }
    });
  }
}