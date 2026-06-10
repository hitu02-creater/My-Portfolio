import { Component , OnInit , signal } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  phrases = [
    "Frontend Developer",
    "Web Desinger",
    "Creative Problem Solver"
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
