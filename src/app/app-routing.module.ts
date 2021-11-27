import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DoneComponent} from "./components/done/done.component";
import {HomePageComponent} from "./components/home-page/home-page.component";

const routes: Routes = [
  {path:'', redirectTo:'home-page',pathMatch:'full'},
  {path:'home-page', component: HomePageComponent},
  {path:'done', component: DoneComponent},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
