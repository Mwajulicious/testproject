import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMployeeComponent } from './Pages/create-mployee/create-mployee.component';
import { EmployeeDetailsComponent } from './Pages/employee-details/employee-details.component';
import { EmployeeListComponent } from './Pages/employee-list/employee-list.component';
import { LoginComponent } from './Pages/login/login.component';
import { UpdateEmployeeComponent } from './Pages/update-employee/update-employee.component';


const routes: Routes = [
  {path: 'employee-list', component:EmployeeListComponent},
  {path: 'create-employee',component:CreateMployeeComponent},
  {path: 'update-employee/:id',component:UpdateEmployeeComponent},
  {path: 'employee-details/:id',component: EmployeeDetailsComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
