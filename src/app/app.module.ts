import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { OurAgencyComponent } from './our-agency/our-agency.component';
import { TalentedTeamComponent } from './talented-team/talented-team.component';
import { OurProtofolioComponent } from './our-protofolio/our-protofolio.component';
import { OurPricingComponent } from './our-pricing/our-pricing.component';
import { ContactUSComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    WhatWeDoComponent,
    OurAgencyComponent,
    TalentedTeamComponent,
    OurProtofolioComponent,
    OurPricingComponent,
    ContactUSComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
