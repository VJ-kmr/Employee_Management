import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employee:Employee=new Employee();

  constructor(private eservice:EmployeeService) { }

  ngOnInit(): void {
  }

  public updateemployee():void{
    console.log(this.employee);
    this.eservice.updateEmployee(this.employee).subscribe(data=>{
      console.log(this.employee);
      
    })

  }

}
