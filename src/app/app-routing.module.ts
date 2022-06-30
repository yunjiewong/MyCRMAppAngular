import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from 'src/guard/auth-guard.guard';
import { AdminGuard } from './admin.guard';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path:"dashboard",component:DashboardComponent, canActivate:[AdminGuard]},
  {path:'login', component:LoginComponent, canActivate:[AdminGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
