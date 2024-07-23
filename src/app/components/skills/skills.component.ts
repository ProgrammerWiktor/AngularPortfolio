import { Component } from '@angular/core';
import { SkillItemComponent } from "../skill-item/skill-item.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillItemComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
