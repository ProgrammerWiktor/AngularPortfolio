import { Component } from '@angular/core';
import { LanguageItemComponent } from "../language-item/language-item.component";
import { CarouselComponent } from "../carousel/carousel.component";
import { ProjectItemComponent } from "../project-item/project-item.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [LanguageItemComponent, CarouselComponent, ProjectItemComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
