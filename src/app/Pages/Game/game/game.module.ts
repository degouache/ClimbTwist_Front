import { GameComponent } from './game.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: GameComponent,
  },
];

@NgModule({
  declarations: [GameComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class GameModule { }
