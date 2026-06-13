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

  setActiveSection(section: string) {
    this.activeSection = section;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {

    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 200;

    for (const section of Array.from(sections)) {

      const top = (section as HTMLElement).offsetTop;
      const height = (section as HTMLElement).offsetHeight;
      const id = section.getAttribute('id');

      if (
        scrollPosition >= top &&
        scrollPosition < top + height
      ) {
        this.activeSection = id || '';
        break;
      }
    }
  }
}