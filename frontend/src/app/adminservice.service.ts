import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  private baseUrl=`http://localhost:8080/admin`;

  constructor(private http : HttpClient) { }


  adminLogin(admin :Admin):Observable<object>{
    console.log(admin);
    return this.http.post(`${this.baseUrl}/login`,admin);
  }

}
