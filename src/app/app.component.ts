import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
<<<<<<< HEAD
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
=======
>>>>>>> f414c4ca1916740970132dc47face076e1ffe30e

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, HeaderComponent, AboutMeComponent, NavbarComponent],
=======
  imports: [RouterOutlet, HeaderComponent],
>>>>>>> f414c4ca1916740970132dc47face076e1ffe30e
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
