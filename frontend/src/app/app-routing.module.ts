import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ContentComponent } from './content/content.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:'',redirectTo:"login",pathMatch:'full'},
  {path:"login",component:LoginComponent},
  {path:"content",component:ContentComponent},
  {path:"employeelist",component:EmployeeListComponent},
  {path:"addemployee" , component:AddEmployeeComponent},
  {path:"updateemployee",component:UpdateEmployeeComponent},
  {path:"deleteemployee",component:DeleteEmployeeComponent},
  {path:"viewemployee",component:ViewEmployeeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
