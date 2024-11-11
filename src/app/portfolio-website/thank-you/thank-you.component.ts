import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  standalone: true,
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {
  showMessage: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.showMessage = true;
    }, 1000); // Show after 1 second
  }
}
