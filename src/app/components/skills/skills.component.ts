import { Component, OnInit } from '@angular/core';
import { SkillItemComponent } from "../skill-item/skill-item.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { ProgrammingLanguage } from '../../../../public/interfaces/ProgrammingLanguage.interface';
import { ProgrammingDataService } from '../../services/programming-data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillItemComponent, AboutMeComponent, NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  programmingData: ProgrammingLanguage[] = [];

  constructor(private programmingDataService: ProgrammingDataService) {}

  ngOnInit(): void {
    this.programmingDataService.getProgrammingData().subscribe(data => {
      this.programmingData = data;
    })
  }
}
