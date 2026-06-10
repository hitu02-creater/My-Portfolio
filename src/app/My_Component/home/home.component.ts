import { Component, OnInit , signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  // constructor(private cdr: ChangeDetectorRef) { }

  phrases = [
    "Frontend Developer",
    "Web Desinger",
    "Creative Problem Solver",
  ]

  displayText= signal('');
  private phraseIdx: number = 0;
  private charIdx: number = 0;
  private isDeleting: boolean = false;

  ngOnInit(): void {
    this.handleTyping();
  }

  private handleTyping(): void {
    const currentText = this.phrases[this.phraseIdx];

    if (!this.isDeleting) {
      this.charIdx++;
      this.displayText.set(currentText.substring(0, this.charIdx));

      if (this.charIdx === currentText.length) {
        this.isDeleting = true;
        setTimeout(() => this.handleTyping(), 2000);
        return;
      }
    } else {
      this.charIdx--;
      this.displayText.set(currentText.substring(0, this.charIdx));

      if (this.charIdx === 0) {
        this.isDeleting = false;
        this.phraseIdx = (this.phraseIdx + 1) % this.phrases.length;
      }
    }

    setTimeout(() => this.handleTyping(), this.isDeleting ? 75 : 150);

  }
}