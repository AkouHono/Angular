import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../portfolio-website/navbar/navbar.component';
import { FooterComponent } from '../portfolio-website/footer/footer.component';

@Component({
  selector: 'app-skill-more',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: '../portfolio-website/skill-more.component.html',
  styleUrl: '../portfolio-website/skill-more.component.scss'
})
export class SkillMoreComponent {

    
constructor(public router:Router){

}
onHome(){
this.router.navigate(['../../portfolio-website/skill-more'])

}

onSkills(){
  const skillSelection =document.getElementById('skill_section')
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

onMore(){

  this.router.navigate(['./portfolio-website/skill-more'])
 
 
}


}
