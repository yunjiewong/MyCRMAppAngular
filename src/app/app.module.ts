import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryModule } from './category/category.module';
import { CustomerModule } from './customer/customer.module';
import { EmployeeModule } from './employee/employee.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { RegionModule } from './region/region.module';
import { LoginComponent } from './login/login.component';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'src/interceptors/token.interceptor';
import { LayoutModule } from './layout/layout.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LayoutModule,
    RouterModule,

    
   
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
