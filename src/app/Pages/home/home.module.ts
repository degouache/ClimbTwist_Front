import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from 'src/app/Shared/nav-bar/nav-bar.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, NavBarComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HomeModule {}
