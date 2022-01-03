import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchResultsComponent } from './modules/search-results/search-results.component';

import { BodyComponent } from './modules/body/body.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'search-results', component: SearchResultsComponent},
  {path: 'home', component: BodyComponent} 
  /* {path:'home', pathMatch:'full'} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
