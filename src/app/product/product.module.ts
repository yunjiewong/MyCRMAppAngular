import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProducComponent } from './list-produc/list-produc.component';
import { ProductRoutingModule } from './product-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddProductComponent,
    ListProducComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule
  ]
})
export class ProductModule { }
