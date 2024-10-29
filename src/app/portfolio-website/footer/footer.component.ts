import { Component } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  Linkedinlink = 'https://www.linkedin.com/in/honorine-gbadabizo-7ba3a2248/'
  emailAddress = 'akouvigbadabizo@gmail.com';

  constructor(public router:Router){

  }

  onHome(){
     window.scrollTo({top:0, behavior:'smooth'});
    
    }
    
    
    onAbout(){
    
      this.router.navigate(['./project-website/about'])
     
    }
    onContact(){
    
      this.router.navigate(['./project-website/contact'])
     
     
    }
}
