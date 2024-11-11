import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioWebsiteRoutingModule } from './portfolio-website-routing.module';
import { SkillDetailsComponent } from './skill-details/skill-details.component';
import { HiremeComponent } from './hireme/hireme.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PortfolioWebsiteRoutingModule,
    SkillDetailsComponent,
    FooterComponent,
    HiremeComponent,
    ThankYouComponent
  ]
})
export class PortfolioWebsiteModule { }
