import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import { SkillMoreComponent } from '../../skill-more/skill-more.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,SkillMoreComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  
  constructor(public router: Router){

  }

  
  onMore(){

    this.router.navigate(['../../portfolio-website/skill-more'])
   
   
  }



}
