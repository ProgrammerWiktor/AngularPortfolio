import { Component, OnInit } from '@angular/core';
import { LanguageItemComponent } from "../language-item/language-item.component";
import { ProgrammingLanguage } from '../../../../public/interfaces/ProgrammingLanguage.interface';
import { ProgrammingDataService } from '../../services/programming-data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [LanguageItemComponent, NgFor],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit {
  programmingData: ProgrammingLanguage[] = [];

  constructor (private programmingDataService: ProgrammingDataService) {}

  ngOnInit(): void {
    this.programmingDataService.getProgrammingData().subscribe(data => {
      this.programmingData = data;
      console.log(this.programmingData);
    });    
  }
}
