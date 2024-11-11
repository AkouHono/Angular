import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { HomeComponent } from "../home/home.component";
import { Router } from '@angular/router';


@Component({
  selector: 'app-hireme',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, HomeComponent],
  templateUrl: './hireme.component.html',
  styleUrl: './hireme.component.scss'
})
export class HiremeComponent {



    
  constructor(public router: Router){

  }

}
