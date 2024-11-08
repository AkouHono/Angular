import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from '../footer/footer.component';
import { SkillDetailsComponent } from '../skill-details/skill-details.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  
  constructor(public router: Router){

  }

  
  onMore(){

    this.router.navigate(['./portfolio-website/skill-details'])
   
   
  }



}
