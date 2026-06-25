import { Component } from '@angular/core';
import { NavbarComponent } from './My_Component/navbar/navbar.component'
import { HomeComponent } from './My_Component/home/home.component'
import { AboutComponent } from './My_Component/about/about.component'
import { EducationComponent } from './My_Component/education/education.component'
import { SkillsComponent } from './My_Component/skills/skills.component'
import { ProjectsComponent } from "./My_Component/projects/projects.component";
import { ContactComponent } from './My_Component/contact/contact.component'
import { FooterComponent } from './My_Component/footer/footer.component'

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HomeComponent, AboutComponent,
    EducationComponent, SkillsComponent,
    ContactComponent,
    FooterComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}

