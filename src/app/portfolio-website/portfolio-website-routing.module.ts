import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { SkillDetailsComponent } from './skill-details/skill-details.component';
import { HiremeComponent } from './hireme/hireme.component';
import { ThankYouComponent } from './thank-you/thank-you.component';





const routes: Routes = [
  {path:'navbar', component:NavbarComponent},
  {path:'footer', component:FooterComponent},
  {path:'home', component:HomeComponent},

  {path:'skill-details', component: SkillDetailsComponent},
  {path:'hireme', component: HiremeComponent},
  {path:'thank-you', component: ThankYouComponent},
  
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioWebsiteRoutingModule { }
