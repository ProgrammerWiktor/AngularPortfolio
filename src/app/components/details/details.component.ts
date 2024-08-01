import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../../../../public/interfaces/Project.interface';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  @Input() item!: Project;
  @Output() close: EventEmitter<void> = new EventEmitter();

  closeDetails(): void {
    const backdrop = document.querySelector('#backdrop');
    const container = document.querySelector('#details-container');

    if (backdrop && container) {
      backdrop.classList.add('fade-out');
      container.classList.add('scale-out');

      backdrop.addEventListener('animationend', () => {
        this.close.emit();
      });
    }
  }
}
