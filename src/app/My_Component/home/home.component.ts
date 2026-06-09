import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  showModal = false;
  resumeUrl: string = 'assets/resume.pdf'; // Path to your file
  safeResumeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.safeResumeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.resumeUrl);
  }

  openResume() {
    this.showModal = true;
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  closeResume() {
    this.showModal = false;
    document.body.style.overflow = 'auto'; // Restore scrolling
  }

};
