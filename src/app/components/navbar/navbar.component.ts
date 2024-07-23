import { NgClass, NgIf } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  showNavbar: boolean = false;
  isMobile: boolean = false;
  mobileMenuIsOpen: boolean = false;
  
  previousScrollPosition: number = 0;
  currentWindowHeight: number = 0;
  currentWindowWidth: number = 0;

  ngOnInit(): void {
    this.onWindowResize();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(): void {
    this.currentWindowHeight = window.innerHeight;
    this.currentWindowWidth = window.innerWidth;

    if (this.currentWindowWidth <= 800) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    const currentScrollPosition = window.scrollY;

    if (
      currentScrollPosition > this.previousScrollPosition &&
      currentScrollPosition >= this.currentWindowHeight
    ) {
      this.showNavbar = true;
    } else if (currentScrollPosition <= this.previousScrollPosition) {
      this.showNavbar = false;
    }

    this.previousScrollPosition = currentScrollPosition;
  }

  toggleMenu(): void {
    this.mobileMenuIsOpen = !this.mobileMenuIsOpen;
  }
}
