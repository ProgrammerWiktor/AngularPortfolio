import { Component } from '@angular/core';
import { LanguageItemComponent } from "../language-item/language-item.component";
import { CarouselComponent } from "../carousel/carousel.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [LanguageItemComponent, CarouselComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
