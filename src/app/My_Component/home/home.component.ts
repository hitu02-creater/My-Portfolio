import { Component, OnInit , ChangeDetectorRef  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef) {}

  phrases = [
    "Frontend Developer",
    "Web Desinger"
  ]

  displayText: string = '';
  private phraseIdx: number = 0;
  private charIdx: number = 0;
  private isDeleting: boolean = false;
  private typingSpeed: number = 150;

  ngOnInit(): void {
    this.handleTyping();
  }

  private handleTyping(): void {
    const currentFullText = this.phrases[this.phraseIdx];

    if (this.isDeleting) {
      this.displayText = currentFullText.substring(0, this.charIdx - 1);
      this.charIdx--;
      this.typingSpeed = 75; // Faster deletion
    } else {
      this.displayText = currentFullText.substring(0, this.charIdx + 1);
    console.log(this.displayText);
      this.charIdx++;
      this.typingSpeed = 150; // Normal typing
    }

    // Switching Logic
    if (!this.isDeleting && this.charIdx === currentFullText.length) {
      this.isDeleting = true;
      this.typingSpeed = 2000; // Pause at end of phrase
    } else if (this.isDeleting && this.charIdx === 0) {
      this.isDeleting = false;
      this.phraseIdx = (this.phraseIdx + 1) % this.phrases.length;
      this.typingSpeed = 500; // Pause before starting next phrase
    }

    setTimeout(() => this.handleTyping(), this.typingSpeed);
  }
}