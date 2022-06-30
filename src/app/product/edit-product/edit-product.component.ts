import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/interface/product';
import { Shipper } from 'src/interface/shipper';
import { ProductService } from 'src/services/product.service';
import { ShipperService } from 'src/services/shipper.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  id:number=0;
  product:Product={
    id: 0,
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
  isSuccessful:boolean=false;
  editProductForm: FormGroup;
  shipperCollection: Shipper[]=[];
  constructor(private activatedRoute: ActivatedRoute, private productService:ProductService,
    private shipperService:ShipperService, private router:Router) {
    activatedRoute.params.subscribe((d)=>{
      this.id = d['id']
    });


    this.editProductForm = new FormGroup({
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
    this.getData()
  }

  getData(){
    this.shipperService.getShipper().subscribe((data)=> {
      this.shipperCollection=data;
    });
  }
  setData(){
    this.productService.getProductById(this.id).subscribe(d=>{
      
      this.editProductForm.patchValue({
       'name': d.name,
      'supplierId': d.supplierId,
      'categoryId':d.categoryId, 
      'quantityPerUnit':  d.quantityPerUnit,
      'unitPrice': d.unitPrice, 
      'unitsInStock': d.unitsInStock, 
      'unitsOnOrder': d.unitsOnOrder, 
      'reorderLevel':d.reorderLevel, 
      'discontinued': d.discontinued
      })
    })
  }

  updateProduct(){
    this.product.id = this.id;
    this.product.name =this.editProductForm.value['name'];
    this.product.supplierId =this.editProductForm.value['supplierId'];
    this.product.categoryId =this.editProductForm.value['categoryId'];
    this.product.quantityPerUnit =this.editProductForm.value['quantityPerUnit'];
    this.product.unitPrice =this.editProductForm.value['unitPrice'];
    this.product.unitsInStock =this.editProductForm.value['unitsInStock'];
    this.product.unitsOnOrder =this.editProductForm.value['unitsOnOrder'];
    this.product.reorderLevel =this.editProductForm.value['reorderLevel'];
    let d =this.editProductForm.value['discontinued'];
    this.product.discontinued=false;
    if(d=="0")
    {
      this.product.discontinued=true;
    }
    
    this.productService.updateProduct(this.product).subscribe(d=>{
      this.isSuccessful=true;
      console.log(this.product);
    })
  }

  Go(){
    this.router.navigateByUrl("product/list");
  }
}
