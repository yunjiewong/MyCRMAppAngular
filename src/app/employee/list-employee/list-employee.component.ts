import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/interface/employee';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {
  employee:Employee ={
    firstName: 'Joe',
    lastName:'Smith',
    city:'LA',
    title:'Manager',
    hireDate:new Date(1/11/2012),
    birthDate:new Date(1/22/1988),
    region:1,
    reportsTo:1,
    titleOfCourtesy:'Mr'
  
  }
  constructor() { }

  ngOnInit(): void {
  }

}
