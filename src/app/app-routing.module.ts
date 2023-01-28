import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./Pages/UserAuth/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./Pages/UserAuth/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./Pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'picker',
    loadChildren: () =>
      import('./Pages/Game/picker/picker.module').then((m) => m.PickerModule),
  },
  {
    path: 'game',
    loadChildren: () =>
      import('./Pages/Game/game/game.module').then((m) => m.GameModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
