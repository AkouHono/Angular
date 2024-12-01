import { Component } from '@angular/core';


import { RouterOutlet } from '@angular/router';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import { FooterComponent } from "./portfolio-website/footer/footer.component";
import { NavbarComponent } from "./portfolio-website/navbar/navbar.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myportfolio';
  faLinkedinIn = faLinkedinIn;
  
  
  

  
}
