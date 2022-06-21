import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Order } from 'src/interface/order';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {
  order: Order={
    productId: 0,
    unitPrice: 0,
    discount: 0,
    quantity: 0
  }
  constructor() { }

  ngOnInit(): void {
  }

  insertOrder(form:NgForm){
    console.log(form.value)
  }
  resetPage(form:NgForm){
    form.reset();
  }

}
