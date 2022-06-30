import { Component, NgModule, OnInit } from '@angular/core';
import { Product } from 'src/interface/product';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ProductService } from 'src/services/product.service';
import { ShipperService } from 'src/services/shipper.service';
import { Shipper } from 'src/interface/shipper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  product: Product={
    id:0, name: "",
    supplierId: 0,
    categoryId: 0,
    quantityPerUnit: 0,
    unitPrice: 0, 
    unitsInStock: 0,
    unitsOnOrder: 0,
    reorderLevel: 0,
    discontinued: false
  }
  productForm: FormGroup;
  isSuccessful:boolean=false;
  shipperCollection: Shipper[]=[];

  constructor(private builer: FormBuilder,private productService: ProductService, 
    private shipperService:ShipperService, private router:Router) {
    this.productForm = builer.group({
      'name': new FormControl(),
      'supplierId':  new FormControl(), 
      'categoryId': new FormControl(), 
      'quantityPerUnit':  new FormControl(),
      'unitPrice': new FormControl(), 
      'unitsInStock':  new FormControl(), 
      'unitsOnOrder': new FormControl(), 
      'reorderLevel': new FormControl(), 
      'discontinued': new FormControl()
      
    });
  
  }

  ngOnInit(): void {
      this.getData();
  }
  
  getData(){
    this.shipperService.getShipper().subscribe((data)=> {
      this.shipperCollection=data;
    });
  }

  saveProduct(){
    this.product.id = 0;
    this.product.name =this.productForm.value['name'];
    this.product.supplierId =this.productForm.value['supplierId'];
    this.product.categoryId =this.productForm.value['categoryId'];
    this.product.quantityPerUnit =this.productForm.value['quantityPerUnit'];
    this.product.unitPrice =this.productForm.value['unitPrice'];
    this.product.unitsInStock =this.productForm.value['unitsInStock'];
    this.product.unitsOnOrder =this.productForm.value['unitsOnOrder'];
    this.product.reorderLevel =this.productForm.value['reorderLevel'];
    let d =this.productForm.value['discontinued'];
    this.product.discontinued=false;
    if(d=="0")
    {
      this.product.discontinued=true;
    }
  //  this.product.discontinued =this.productForm.value['discontinued'];

    this.productService.insertProduct(this.product).subscribe((d)=>{
      this.isSuccessful=true;
      console.log(this.product);
    });
 
  }
  GoProductList(){
    this.router.navigateByUrl("product/list");
  }
}
