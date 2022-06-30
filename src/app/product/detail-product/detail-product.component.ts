import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/interface/product';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {

  id:number = 0;
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
  };

  
  constructor(private router:Router,private productService:ProductService, private activatedRoute:ActivatedRoute) { 
    activatedRoute.params.subscribe(d=>{
      this.id = d['id'];
    })
  }

  ngOnInit(): void {
  this.getData();

  }

  getData(){
    this.productService.getProductById(this.id).subscribe(d=>{
      this.product= d;
      console.log(this.product);
    })
  }

  GoBack(){
    this.router.navigate(['product/list']);
  }
}
