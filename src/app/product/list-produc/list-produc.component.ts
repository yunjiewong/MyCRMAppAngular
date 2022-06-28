import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/interface/product';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-list-produc',
  templateUrl: './list-produc.component.html',
  styleUrls: ['./list-produc.component.scss']
})
export class ListProducComponent implements OnInit {

  prodCollection:Product[]=[];

  constructor(private prodService:ProductService, private router:Router) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.prodService.getProduct().subscribe((data)=>{
      this.prodCollection=data;
    })
  }

  deleteProduct(id:any){
    this.prodService.deleteProduct(id).subscribe(d =>
      {
        this.getData();
      });
  }

  editProduct(id:any){
    this.router.navigate(['product/edit/'+id]);
  }

  detailProduct(id:any){
    this.router.navigate(['product/detail/'+id]);
  }
}
