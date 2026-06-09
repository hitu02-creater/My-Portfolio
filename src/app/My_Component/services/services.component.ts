import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  services = [
    { logo : 'draw',
      title: 'Web Design', 
      desc: 'Responsive and user-centric designs that emphasize clarity and brand identity across all devices.',
      Checkbox1 : 'Web Design',
      Checkbox2 : 'Prototyping',
      Checkbox3 : 'Cross-Browser Compatibility', },

    { logo : 'code',
      title: 'Frontend Development', 
      desc: 'Modern, scalable web applications built with Angular, TypeScript, and industry best practices.',
      Checkbox1 : 'Angular Development',
      Checkbox2 : 'Responsive Design',
      Checkbox3 : 'Component Architecture', },


    { logo : 'speed',
      title: 'Performance', 
      desc: 'Enhancing speed, accessibility, and user experience for modern web applications.', 
      Checkbox1 : 'Core Web Vitals',
      Checkbox2 : 'Lazy Loading',
      Checkbox3 : 'SEO & Accessibility',}
  ];

}
