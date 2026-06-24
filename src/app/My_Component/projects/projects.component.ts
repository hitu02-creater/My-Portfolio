import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {

  projects = [
    {
      title: 'Personal Portfolio Website',
      description:
        'Modern responsive portfolio website built using Angular, TypeScript and Tailwind CSS. Features project showcase, skills section, contact form and responsive design.',
      technologies: ['Angular', 'TypeScript', 'Tailwind CSS'],
      link: 'https://hitu02-creater.github.io/My-Portfolio/',
      icon: '💻'
    },
    {
      title: 'Budget Web Application',
      description:
        'Finance management application with expense tracking, budget planning, analytics dashboard, monthly reports and transaction history.',
      technologies: ['React', 'Tailwind CSS', 'Recharts'],
      link: 'https://hitu02-creater.github.io/Budget_Web-Application/',
      icon: '💰'
    }
  ];

}
