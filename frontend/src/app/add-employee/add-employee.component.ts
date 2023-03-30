import { assertPlatform, Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
   employee :Employee=new Employee();
   
  constructor(private eservice:EmployeeService) { }

  ngOnInit(): void {
    this.addemployee();
  }
  public addemployee():void{
    console.log(this.employee);
    this.eservice.addEmployee(this.employee).subscribe(data=>{
      console.log(data);
      alert('employee added');
    });
    

  }

}
