import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {

  projects = [
    {
      title: 'Personal Portfolio Website',
      description:
        'Modern responsive portfolio website built using Angular, TypeScript and Tailwind CSS. Features project showcase, skills section, contact form and responsive design.',
      link: 'https://hitu02-creater.github.io/My-Portfolio/',
      icon: '💻',
      Checkbox1 : 'Angular',
      Checkbox2 : 'Typescript',
      Checkbox3 : 'TailwindCss',
    },
    {
      title: 'Budget Web Application',
      description:
        'Finance management application with expense tracking, budget planning, analytics dashboard, monthly reports and transaction history.',
      link: 'https://hitu02-creater.github.io/Budget_Web-Application/',
      icon: '💰',
      Checkbox1 : 'React',
      Checkbox2 : 'TailwindCss',
      Checkbox3 : 'Recharts',
    }
  ];

}
