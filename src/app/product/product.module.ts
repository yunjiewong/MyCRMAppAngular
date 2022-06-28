import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProducComponent } from './list-produc/list-produc.component';
import { ProductRoutingModule } from './product-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductService } from 'src/services/product.service';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AddProductComponent,
    ListProducComponent,
    EditProductComponent,
    DetailProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    RouterModule
    
  ],
  providers:[ProductService]
})
export class ProductModule { }
