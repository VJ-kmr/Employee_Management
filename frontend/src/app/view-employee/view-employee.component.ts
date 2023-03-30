import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  employee:Employee=new Employee();
  constructor(private eservice:EmployeeService) { }

  ngOnInit(): void {
    
  }

  public viewemployee(empid:string):void{
    let id=parseInt(empid);
    this.eservice.getEmployeeById(id).subscribe(data=>{
      console.log(data);
      this.employee=<Employee>data;

    })
  }

}
