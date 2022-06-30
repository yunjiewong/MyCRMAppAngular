
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from 'src/guard/auth-guard.guard';


const routes: Routes = [
  {path:'region', loadChildren: () => import('../region/region.module').then(m=>m.RegionModule),canActivate:[AuthGuardGuard], canLoad:[AuthGuardGuard] },
  
  {path:'employee', loadChildren: () => import('../employee/employee.module').then(m=>m.EmployeeModule),canActivate:[AuthGuardGuard],canLoad:[AuthGuardGuard] },
  {path:'account', loadChildren:()=> import('../account/account.module').then(m=>m.AccountModule)},

  
  {path:'category', loadChildren: () => import('../category/category.module').then(m=>m.CategoryModule),canActivate:[AuthGuardGuard], canLoad:[AuthGuardGuard] },
  {path:'customer', loadChildren: () => import('../customer/customer.module').then(m=>m.CustomerModule),canActivate:[AuthGuardGuard], canLoad:[AuthGuardGuard]},
  {path:'order', loadChildren: () => import('../order/order.module').then(m=>m.OrderModule),canActivate:[AuthGuardGuard], canLoad:[AuthGuardGuard] },
  {path:'product', loadChildren: () => import('../product/product.module').then(m=>m.ProductModule),canActivate:[AuthGuardGuard], canLoad:[AuthGuardGuard] },
  {path:'account', loadChildren: () => import('../account/account.module').then(m=>m.AccountModule),canActivate:[AuthGuardGuard], canLoad:[AuthGuardGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }