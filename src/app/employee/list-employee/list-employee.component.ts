import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/interface/employee';
import { EmployeeService } from 'src/services/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {

  empCollection:Employee[]=[]
  constructor(private empService:EmployeeService,private router:Router) { }

  ngOnInit(): void {
    this.getAllEmps();
  }

  getAllEmps(){
    this.empService.getAllEmployee().subscribe(d =>{
        this.empCollection = d;
    });
  }

  editEmployee(id:number){
    this.router.navigate(['employee/edit/'+id]);
  }


}
