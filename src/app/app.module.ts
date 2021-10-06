import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrendingComponent } from './trending/trending.component';
import { FooterComponent } from './footer/footer.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { WhatsnewComponent } from './whatsnew/whatsnew.component';
import { Weekly2Component } from './weekly2/weekly2.component';
import { WeeklyComponent } from './weekly/weekly.component';
import { HeaderComponent } from './header/header.component';
import { LogosecComponent } from './logosec/logosec.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailsComponent } from './details/details.component';
import { RecentartComponent } from './recentart/recentart.component';
import { PaginationComponent } from './pagination/pagination.component';
import { GitComponent } from './git/git.component';
import { LayoutComponent } from './layout/layout.component';
import { FollowusComponent } from './followus/followus.component';

@NgModule({
  declarations: [
    AppComponent,
    TrendingComponent,
    FooterComponent,
    YoutubeComponent,
    WhatsnewComponent,
    Weekly2Component,
    WeeklyComponent,
    HeaderComponent,
    LogosecComponent,
    NavbarComponent,
    DetailsComponent,
    RecentartComponent,
    PaginationComponent,
    GitComponent,
    LayoutComponent,
    FollowusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
