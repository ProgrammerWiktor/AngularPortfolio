import { Component, Input } from '@angular/core';
import { ProgrammingLanguage } from '../../../../public/interfaces/ProgrammingLanguage.interface';
import { ProgrammingDataService } from '../../services/programming-data.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-language-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './language-item.component.html',
  styleUrl: './language-item.component.scss',
})
export class LanguageItemComponent {
  @Input() item!: ProgrammingLanguage;

  constructor(private programmingDataService: ProgrammingDataService) {}

  selectLanguage() {
    this.programmingDataService.selectLanguage(this.item.name);
  }

  isSelected(): boolean {
    if (this.item.name === this.programmingDataService.getSelectedItem()) {
      return true;
    } else {
      return false;
    }
  }
}
