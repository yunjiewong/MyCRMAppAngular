import { Component, NgModule, OnInit } from '@angular/core';
import { Product } from 'src/interface/product';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  product: Product={
    name: '',
    supplierId: 0,
    categoryId: 0,
    quantityPerUnit: 0,
    unitPrice: 0,
    unitsInStock: 0,
    unitsOnOrder: 0,
    reorderLevel: 0,
    discontinued: false
  }
  constructor() { }

  ngOnInit(): void {
  }
  
  insertProduct(form:NgForm){
    console.log(form.value);
  }
  resetPage(form:NgForm){
    form.reset();
  }
}
