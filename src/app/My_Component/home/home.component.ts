import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  words = [
    "Frontend Developer",
    "Web Desinger"
  ]

  displaytext = "";
  wordindex = 0;
  charindex = 0;
  isDeleting = false;

  ngOnInit(): void {
    console.log('ngOnInit called');
  this.startTyping();
}

startTyping() {
  setInterval(() => {
    const currentWord = this.words[this.wordindex];

    if (!this.isDeleting) {
      this.displaytext = currentWord.substring(0, this.charindex++);
      if (this.charindex > currentWord.length) {
        this.isDeleting = true;
      }
    } else {
      this.displaytext = currentWord.substring(0, this.charindex--);
      if (this.charindex < 0) {
        this.isDeleting = false;
        this.wordindex = (this.wordindex + 1) % this.words.length;
        this.charindex = 0;
      }
    }
  }, 100);
}

  // ngOnInit(): void {
  //   this.typeEffect();
  // }

  // typeEffect(): void {
  //   const currentWord = this.words[this.wordindex];

  //   if (this.isDeleting) {
  //     this.displaytext = currentWord.substring(0, this.charindex - 1)
  //     this.charindex--;

  //     if (this.charindex < 0) {
  //       this.isDeleting = false;
  //       this.wordindex = (this.wordindex + 1) % this.words.length;
  //       this.charindex = 0;
  //     }
  //   }

  //   else {
  //     this.displaytext = currentWord.substring(0, this.charindex + 1);
  //     this.charindex++;

  //     if (this.charindex > currentWord.length) {
  //       this.isDeleting = true;

  //       setTimeout(() => this.typeEffect(), 1500);

  //       return;
  //     }
  //   }
  //   setTimeout(() => {
  //     this.typeEffect();
  //   }, this.isDeleting ? 60 : 100);
  // }
}