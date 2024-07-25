import { Component } from '@angular/core';
import { LanguageItemComponent } from "../language-item/language-item.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [LanguageItemComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
