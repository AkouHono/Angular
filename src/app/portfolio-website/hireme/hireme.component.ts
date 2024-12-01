import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { HomeComponent } from "../home/home.component";
import { Router } from '@angular/router';
import { SkillDetailsComponent } from '../skill-details/skill-details.component';
import { AboutComponent } from '../about/about.component';


@Component({
  selector: 'app-hireme',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, HomeComponent, SkillDetailsComponent, AboutComponent],
  templateUrl: './hireme.component.html',
  styleUrl: './hireme.component.scss'
})
export class HiremeComponent {



    
  constructor(public router: Router){

  }

}
