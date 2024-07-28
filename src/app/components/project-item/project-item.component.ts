import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SkillItemComponent } from "../skill-item/skill-item.component";

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [NgOptimizedImage, SkillItemComponent],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.scss'
})
export class ProjectItemComponent {
  @Input() title!: string;
  @Input() imageSrc!: string;
}
