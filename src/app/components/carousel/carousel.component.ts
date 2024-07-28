import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LanguageItemComponent } from '../language-item/language-item.component';
import { ProgrammingLanguage } from '../../../../public/interfaces/ProgrammingLanguage.interface';
import { ProgrammingDataService } from '../../services/programming-data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [LanguageItemComponent, NgFor],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit {
  programmingData: ProgrammingLanguage[] = [];

  @ViewChild('carousel', { static: true }) carousel!: ElementRef;

  constructor(private programmingDataService: ProgrammingDataService) {}

  ngOnInit(): void {
    this.getProgrammingData();
  }

  getProgrammingData() {
    this.programmingDataService.getProgrammingData().subscribe((data) => {
      this.programmingData = data;
    });
  }

  scrollLeft(): void {
    const carousel = this.carousel.nativeElement;
    const scrollAmount = carousel.offsetWidth;
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }

  scrollRight(): void {
    const carousel = this.carousel.nativeElement;
    const scrollAmount = carousel.offsetWidth;
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}
