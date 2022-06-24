import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/interface/employee';
import { Region } from 'src/interface/region';
import { EmployeeService } from 'src/services/employee.service';
import { RegionService } from 'src/services/region.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  employee:Employee ={
    firstName: '',
    lastName: '',
    city: '',
    title: '',
    hireDate: new Date(),
    birthDate: new Date(),
    region: 0,
    reportsTo: 0,
    titleOfCourtesy: '',
    regionName: '',
    fullName: '',
    id: 0,
  
  }
  regionCollection:Region[] = [];
  isSuccessful:boolean = false;
  regionArea:string='';
  constructor(private empService: EmployeeService, private regionService:RegionService) { 
    
  }
  
  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.regionService.getRegion().subscribe((data)=> {
      this.regionCollection=data;
    });
  }

  insertEmployee(form:NgForm){
    this.employee.id = 0,
    this.employee.fullName = form.value['firstName']+' '+form.value['lastName'],
    this.employee.region = parseInt(this.regionArea.split(',')[1]);
    this.employee.regionName = this.regionArea.split(',')[0];

    this.empService.insertEmployee(this.employee).subscribe((d:any)=>{
      // alert("Region has been saved");
       this.isSuccessful=true;
    });
    console.log(this.employee);
  }

  resetPage(form:NgForm){
    form.reset();
  }


}
