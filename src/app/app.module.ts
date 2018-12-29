import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { TalentedTeamComponent } from './talented-team/talented-team.component';
import { OurProtofolioComponent } from './our-protofolio/our-protofolio.component';
import { OurPricingComponent } from './our-pricing/our-pricing.component';
// import { ContactUSComponent } from './contact-us/contact-us.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { ContentComponent } from './content/content.component';
import { TestamonialComponent } from './testamonial/testamonial.component';
import { ClientComponent } from './client/client.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SocialComponent } from './social/social.component';
 import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BlogComponent } from './blog/blog.component';

import { ContactComponent } from './contact/contact.component';
import { AdvService } from './adv.service';


@NgModule({
  declarations: [
    AppComponent,
    WhatWeDoComponent,
  
    TalentedTeamComponent,
    OurProtofolioComponent,
    OurPricingComponent,
    // ContactUSComponent,
    NavComponent,
    ContentComponent,
    TestamonialComponent,
    ClientComponent,
    FooterComponent,
    HeaderComponent,
    SocialComponent,
     LoginComponent,
    SignupComponent,
    BlogComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AdvService],
  bootstrap: [AppComponent],
 
})


































export class AppModule { }

