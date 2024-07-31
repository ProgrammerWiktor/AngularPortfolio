import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from "./components/footer/footer.component";
import { DetailsComponent } from "./components/details/details.component";
import { NgIf } from '@angular/common';
import { Project } from '../../public/interfaces/Project.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    AboutMeComponent,
    NavbarComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    DetailsComponent,
    NgIf
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  projectDetailsData?: Project | null;

  closeDetails(): void {
    this.projectDetailsData = null;
  }

  openDetails(project: Project): void {
    this.projectDetailsData = project;
  }
}
