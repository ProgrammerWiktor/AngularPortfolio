import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-item',
  standalone: true,
  imports: [],
  templateUrl: './skill-item.component.html',
  styleUrl: './skill-item.component.scss'
})
export class SkillItemComponent {
  @Input() skillName !: string;
  @Input() imageSrc !: string;
}
