import { Component, OnInit } from '@angular/core';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees:Employee[] = []; 
  employee :Employee=new Employee();
  

  
  constructor(private eservice:EmployeeService ) { }
  
  ngOnInit(): void {
    this.getEmployees();
    
    
  }

  public getEmployees(){
    this.eservice.getAllEmployees().subscribe(data =>{
      console.log(data);
      this.employees = data;}
      );
  }

  public deleteemployee(empid:number):void{
    //let id=parseInt(empid);
    this.eservice.deleteEmployee(empid).subscribe(data=>{
      console.log(data);
      //this.getEmployees;
      this.ngOnInit();

    })
  }


  
  public addemployee():void{
    console.log(this.employee);
    this.eservice.addEmployee(this.employee).subscribe(data=>{
      console.log(data);
      this.ngOnInit();
      
    });
  }

  public updateemployee():void{
    console.log(this.employee);
    this.eservice.updateEmployee(this.employee).subscribe(data=>{
      console.log(this.employee);
      this.ngOnInit();
      console.log(this.employee.empId);
      
    })
  }

  public viewemployee(empid:number):void{
   // let id=parseInt(empid);
    this.eservice.getEmployeeById(empid).subscribe(data=>{
      console.log(data);
      this.employee=<Employee>data;

    })
  }

  

}
