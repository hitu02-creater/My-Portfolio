import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  education = [
    { year: '2020 - 2024', degree: 'Bachelor of Computer Engineering', school: 'Technical University' },
    { year: '2018 - 2020', degree: 'Higher Secondary Education', school: 'Science Academy' }
  ];
}
