import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {

  selectedProject: any = null;

  openDetails(project: any) {
    this.selectedProject = project;
  }

  closeDetails() {
    this.selectedProject = null;
  }

  projects = [

    {
      id: 2,
      title: 'Personal Portfolio Website',
      category: 'Angular Project',
      image: 'Angular_Base_Porfolio_Project Pic.png',
      description:
        'Responsive portfolio showcasing projects, skills, experience and achievements with smooth animations and modern UI.',

      technologies: [
        'Angular',
        'TypeScript',
        'Tailwind CSS'
      ],

      features: [
        'Responsive Design',
        'Project Showcase',
        'Smooth Navigation',
        'Modern UI'
      ],

      longDescription: "A modern,responsive portfolio website showcasing projects, skills, and achievements with smooth animations and an engaging user experience.",

      challenges: "Implemented responsive layouts, reusable components, smooth animations, and optimized performance across devices.",
      
      liveLink:
        'https://hitu02-creater.github.io/My-Portfolio/',

      githubLink:
        'https://github.com/hitu02-creater/My-Portfolio'
    },

    {
      id: 1,
      title: 'Budget Web Application',
      category: 'Featured Project',
      image: 'Budget_Project Pic.png',
      description:
        'A complete personal finance dashboard for tracking expenses, managing budgets, viewing analytics, and generating monthly reports.',

      technologies: [
        'React',
        'Tailwind CSS',
        'Recharts',
        'LocalStorage',
        'Redux'
      ],

      features: [
        'Expense Tracking',
        'Budget Planning',
        'Monthly Reports',
        'Analytics Dashboard'
      ],

      longDescription: "A comprehensive personal finance management application that helps users track expenses, manage monthly budgets, visualize spending patterns, and gain financial insights through interactive dashboards and reports.",

      challenges: "Implemented budget management, expense tracking, analytics dashboards, and persistent data storage with the help of localStorage",

      liveLink:
        'https://budget-web-application-three.vercel.app/',

      githubLink:
        'https://github.com/hitu02-creater/Budget_Web-Application'
    }
  ];

}
