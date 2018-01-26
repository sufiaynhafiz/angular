import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './containers/heroes/heroes.component';
import { DetailComponent } from './containers/detail/detail.component';

const COMPONENTS = [
  HeroesComponent,
  DetailComponent
];

@NgModule({
  imports: [
    CommonModule,
    HeroesRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [
    ...COMPONENTS
  ]
})
export class HeroesModule { }
