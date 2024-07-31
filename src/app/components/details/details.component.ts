import { Component, EventEmitter, Input, Output } from '@angular/core';
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
    this.close.emit();
  }
}
