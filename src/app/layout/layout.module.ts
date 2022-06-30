import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutRoutingModule } from './layout-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CategoryModule } from '../category/category.module';
import { CustomerModule } from '../customer/customer.module';
import { EmployeeModule } from '../employee/employee.module';
import { OrderModule } from '../order/order.module';
import { ProductModule } from '../product/product.module';
import { RegionModule } from '../region/region.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    LayoutRoutingModule,
    FormsModule,
    RouterModule,
    EmployeeModule,
    RegionModule,
    CategoryModule,
    CustomerModule,
    OrderModule,
    ProductModule,
    
  ],

  exports:[],
  bootstrap:[DashboardComponent]
})

export class LayoutModule { }
