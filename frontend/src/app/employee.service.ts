import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl=`http://localhost:8080/employeemgt`;

  constructor(private http : HttpClient) { }

  // public getemployees()

  getAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.baseUrl}/viewall`);
  }

  getEmployeeById(empid:number):Observable<object>{
    return this.http.get(`${this.baseUrl}/view/${empid}`);
  }

  updateEmployee(employee:Employee):Observable<object>{
    return this.http.put(`${this.baseUrl}/update`,employee);
  }

  addEmployee(employee:Employee):Observable<object>{
    return this.http.post(`${this.baseUrl}/add`,employee);
  }

  deleteEmployee(empid:number):Observable<object>{
    return this.http.delete(`${this.baseUrl}/delete/${empid}`);
  }

  




  
}
