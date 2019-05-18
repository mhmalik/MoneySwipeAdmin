import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login', loadChildren: '../app/modules/login/login.module#LoginModule'
  },
  {
    path: 'dashboard', loadChildren: '../app/modules/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'user', loadChildren: '../app/modules/user/user.module#UsersModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
