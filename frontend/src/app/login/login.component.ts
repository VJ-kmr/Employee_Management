import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Admin } from '../admin';

import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  admin :Admin=new Admin();
  Invalid:string | undefined;

  constructor( private aservice :AdminserviceService,private route:Router
    ) { }

  ngOnInit(): void {
  }


  public adminLogin(){
    this.aservice.adminLogin(this.admin).subscribe(data=>{
      this.route.navigate(['/employeelist'])
    },error=>this.Invalid="Invalid Credential!!");
    
  }
  
}
