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

 words : String[] = [
  "Frontend Developer",
  "Web Desinger"
 ]

 displaytext ="";
 wordindex = 0;
 charindex =0;
 isDeleting = false;

 typeEffect() {
  const currentWord = this.words[this.wordindex];

  if(!this.isDeleting){
    this.displaytext = currentWord.substring(0 , this.charindex + 1)
    this.charindex++;

    if(this.charindex === currentWord.length){
      this.isDeleting = false;
      setTimeout(()=>{this.typeEffect(),1500});
      return;
    }
  }

  else{
    this.displaytext = currentWord.substring(0 , this.charindex - 1)
    this.charindex--;

    if(this.charindex === 0){
      this.isDeleting = false;
      this.wordindex = (this.wordindex + 1) % this.words.length;
    }
  }
  setTimeout(() => this.typeEffect() , this.isDeleting ? 60 : 100);
 } 

};
