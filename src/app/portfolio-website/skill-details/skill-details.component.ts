import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { Router, RouterModule } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { HiremeComponent } from '../hireme/hireme.component';

// Define the Skill interface to represent individual skills
interface Skill {
  name: string;
  description: string;
  showDetails: boolean;
}

// Define the SkillCategory interface for skill categories
interface SkillCategory {
  name: string;       // The name of the category (e.g., Front-end, Back-end)
  items: Skill[];     // Array of skills under this category
}

@Component({
  selector: 'app-skill-details',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterModule, NgFor, HiremeComponent],
  templateUrl: './skill-details.component.html',
  styleUrls: ['./skill-details.component.scss'] 
})
export class SkillDetailsComponent {
  skills: SkillCategory[] = [
    {
      name: 'Front-end',
      items: [
        { name: 'HTML5', description: 'I use HTML5 to structure web pages, ensuring semantic markup for better SEO and accessibility.', showDetails: false },
        { name: 'CSS3', description: 'With CSS3, I style my web pages to create responsive and visually appealing layouts using Flexbox and Grid.', showDetails: false },
        { name: 'JavaScript', description: 'I enhance interactivity with JavaScript, utilizing frameworks like React.js and Angular.js for dynamic user interfaces.', showDetails: false },
        { name: 'React.js', description: 'In React.js, I build reusable components that manage their own state, facilitating efficient UI development.', showDetails: false },
        { name: 'Angular.js', description: 'Using Angular.js, I develop single-page applications (SPAs) with powerful features like dependency injection and routing.', showDetails: false }
      ]
    },
    {
      name: 'Back-end',
      items: [
        { name: 'Node.js', description: 'I use Node.js for building scalable network applications, leveraging its event-driven architecture.', showDetails: false },
      
        { name: 'MongoDB', description: 'MongoDB serves as my NoSQL database, allowing me to store and retrieve data in a flexible schema.', showDetails: false },
        { name: 'Python', description: 'I utilize Python for data manipulation and backend services, often integrating with machine learning models.', showDetails: false },
        { name: 'PHP', description: 'Using PHP, I develop server-side applications and manage content management systems like WordPress.', showDetails: false }
      ]
    }
  ];

  constructor(public router: Router) {}

  onMore() {
    this.router.navigate(['/portfolio-website/skill-details']);
  }

  onHome() {
    this.router.navigate(['/portfolio-website/home']);
  }
}
