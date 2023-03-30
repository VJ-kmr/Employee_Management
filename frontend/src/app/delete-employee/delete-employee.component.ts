import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  constructor(private eservise:EmployeeService ) { }

  ngOnInit(): void {
  }

  public deleteemployee(empid:string):void{
    let id=parseInt(empid);
    this.eservise.deleteEmployee(id).subscribe(data=>{
      console.log(data);
    })
  }

}
