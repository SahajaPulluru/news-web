import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent } from './layout/layout.component';
import { WhatsnewComponent} from './whatsnew/whatsnew.component';
import { DetailsComponent } from './details/details.component';
const routes: Routes = [
  {
    path : "whatsnew",
    component : WhatsnewComponent
  },
  {
    path : "layout",
    component :LayoutComponent 
  },
  {
    path : "details/:id",
    component : DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
