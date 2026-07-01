import { Component } from '@angular/core';

interface SkillCategory {
  title: string;
  subtitle: string;
  skills: {
    name: string;
    icon: string;
  }[];
}
@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})

export class SkillsComponent {

  categories: SkillCategory[] = [
    {
      title: 'Languages',
      subtitle: 'Core technologies',
      skills: [
        {
          name: 'TypeScript',
          icon: 'typescript'
        },
        {
          name: 'JavaScript',
          icon: 'javascript'
        },
        {
          name: 'HTML5',
          icon: 'html5'
        },
        {
          name: 'CSS3',
          icon: 'css3'
        },
        {
          name: 'SCSS',
          icon: 'sass'
        }
      ]
    },

    {
      title: 'Frameworks',
      subtitle: 'Frontend ecosystem',
      skills: [
        {
          name: 'Angular JS',
          icon: 'angularjs'
        },
        {
          name: 'React JS',
          icon: 'react'
        },
        {
          name: 'Bootstrap',
          icon: 'bootstrap'
        },
        {
          name: 'TailwindCSS',
          icon: 'tailwindcss'
        }
      ]
    },

    {
      title: 'Tools',
      subtitle: 'Development workflow',
      skills: [
        {
          name: 'VS Code',
          icon: 'vscode'
        },
        {
          name: 'Git',
          icon: 'git'
        },
        {
          name: 'GitHub',
          icon: 'github'
        },
        {
          name: 'Vercel',
          icon: 'vercel'
        }
      ]
    }
  ];
}


