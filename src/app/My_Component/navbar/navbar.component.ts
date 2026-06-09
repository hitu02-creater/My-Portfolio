import { Component , NgModule  , HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
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
