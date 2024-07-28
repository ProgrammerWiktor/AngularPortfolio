import { Component, Input } from '@angular/core';
import { ProgrammingLanguage } from '../../../../public/interfaces/ProgrammingLanguage.interface';

@Component({
  selector: 'app-skill-item',
  standalone: true,
  imports: [],
  templateUrl: './skill-item.component.html',
  styleUrl: './skill-item.component.scss'
})
export class SkillItemComponent {
  @Input() item!: ProgrammingLanguage;
}
