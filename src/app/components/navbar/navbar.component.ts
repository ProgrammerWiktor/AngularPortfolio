import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  showNavbar: boolean = false;
  previousScrollPosition: number = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    const currentScrollPosition = window.scrollY;
    const currentWindowHeight = window.innerHeight;

    if (
      currentScrollPosition > this.previousScrollPosition &&
      currentScrollPosition >= currentWindowHeight
    ) {
      this.showNavbar = true;
    } else if (currentScrollPosition <= this.previousScrollPosition) {
      this.showNavbar = false;
    }

    this.previousScrollPosition = currentScrollPosition;
  }
}
