import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from '../footer/footer.component';
import { SkillDetailsComponent } from '../skill-details/skill-details.component';
import { Router } from '@angular/router';
import { HiremeComponent } from '../hireme/hireme.component';
import { ThankYouComponent } from '../thank-you/thank-you.component';
import {  MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';





@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,FooterComponent, HiremeComponent, ThankYouComponent, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  

  
  constructor(public router: Router){

  
  }

  
  onMore(){

    this.router.navigate(['./portfolio-website/skill-details'])
   
   
  }

  onHireme(){

    this.router.navigate(['./portfolio-website/hireme'])
   
   
  }

}
