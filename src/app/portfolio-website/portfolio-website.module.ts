import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioWebsiteRoutingModule } from './portfolio-website-routing.module';
import { SkillDetailsComponent } from './skill-details/skill-details.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PortfolioWebsiteRoutingModule,
    SkillDetailsComponent
  ]
})
export class PortfolioWebsiteModule { }
