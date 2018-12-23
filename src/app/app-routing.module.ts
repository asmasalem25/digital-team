import { NgModule } from '@angular/core';
import { Routes, Router,RouterModule } from '@angular/router';


import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { OurProtofolioComponent } from './our-protofolio/our-protofolio.component';
import { OurPricingComponent } from './our-pricing/our-pricing.component';
import { ContentComponent } from './content/content.component';
import { TestamonialComponent } from './testamonial/testamonial.component';
import { ClientComponent } from './client/client.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import{RoutegaurdService}  from './routegaurd.service'
import { BlogComponent } from './blog/blog.component';
const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  {path:'Home', component :HeaderComponent },
  {path:'About', component :WhatWeDoComponent},
  {path:'Service', component :ContentComponent},
  {path:'Testamonial', component :TestamonialComponent },
  {path:'Gallary', component :OurProtofolioComponent},
  {path:'Clients', component :ClientComponent},
  {path:'Pricing', component :OurPricingComponent },
  {path:'Blog', component :BlogComponent   ,canActivate:[RoutegaurdService],
  {path:'Login', component :LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
  }

  // ...

 }
