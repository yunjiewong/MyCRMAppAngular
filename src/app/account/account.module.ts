import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { AccountRoutingModule } from './account-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountService } from 'src/services/account.service';
import { TokenInterceptor } from 'src/interceptors/token.interceptor';



@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    
    
  ],
  providers:[{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true
  }]
})
export class AccountModule { }
