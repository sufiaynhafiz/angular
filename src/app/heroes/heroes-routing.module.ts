import { HeroesComponent } from './containers/heroes/heroes.component';
import { DetailComponent } from './containers/detail/detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'heroes', pathMatch: 'full'},
  {path: 'heroes', component: HeroesComponent},
  {path: 'detail/:name', component: DetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
