import { Component, OnInit } from '@angular/core';
import { LanguageItemComponent } from '../language-item/language-item.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { ProjectItemComponent } from '../project-item/project-item.component';
import { ProgrammingLanguage } from '../../../../public/interfaces/ProgrammingLanguage.interface';
import { ProgrammingDataService } from '../../services/programming-data.service';
import { NgFor } from '@angular/common';
import { ProjectWithLanguage } from '../../../../public/interfaces/ProjectWithLanguage.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    LanguageItemComponent,
    CarouselComponent,
    ProjectItemComponent,
    NgFor,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  programmingData: ProgrammingLanguage[] = [];

  constructor(private programmingDataService: ProgrammingDataService) {}

  ngOnInit(): void {
    this.getProgrammingData();
  }

  getProgrammingData(): void {
    this.programmingDataService.getProgrammingData().subscribe((data) => {
      this.programmingData = data;
    });
  }

  filteredProjects(): ProjectWithLanguage[] {
    const selectedLangauge = this.programmingDataService.getSelectedLanguage();

    if (selectedLangauge === 'All') {
      return this.programmingData.flatMap((lang) =>
        lang.projects.map((project) => ({
          ...project,
          language: lang.name,
        }))
      );
    } else {
      const selectedLanguageData = this.programmingData.find(
        (lang) => lang.name === selectedLangauge
      );

      return selectedLanguageData
        ? selectedLanguageData.projects.map((project) => ({
            ...project,
            language: project.name,
          }))
        : [];
    }
  }
}
