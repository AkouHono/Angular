import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThankYouComponent } from '../thank-you/thank-you.component';
import{faLinkedinIn, faGithub, } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';








@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  faLinkedinIn = faLinkedinIn;
  faGithub = faGithub;
  emailIcon = faEnvelope;


constructor(public router:Router){
  

}
onHome(){
this.router.navigate(['./portfolio-website/home'])

}

onSkills(){
  const skillSelection =document.getElementById('skills-section')
  if(skillSelection){

    skillSelection.scrollIntoView({behavior:'smooth', block:'start'})
  }
 
}

onAbout(){

  this.router.navigate(['./portfolio-website/about'])
 
}
onContact(){

  this.router.navigate(['./portfolio-website/contact'])
 
 
}

}
