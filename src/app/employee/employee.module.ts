import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { FormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeService } from 'src/services/employee.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AddEmployeeComponent,
    ListEmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers:[EmployeeService]
})
export class EmployeeModule { }
