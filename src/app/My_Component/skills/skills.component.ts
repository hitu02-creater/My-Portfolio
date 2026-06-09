import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  
  skills = ['Angular', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'RXJS', 'Git', 'HTML5', 'SASS'];

}
