import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThankYouComponent } from './portfolio-website/thank-you/thank-you.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my_portfolio';
}
