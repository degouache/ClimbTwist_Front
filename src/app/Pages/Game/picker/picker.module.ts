import { PickerComponent } from './picker.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PickerComponent,
  },
];

@NgModule({
  declarations: [PickerComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class PickerModule { }
