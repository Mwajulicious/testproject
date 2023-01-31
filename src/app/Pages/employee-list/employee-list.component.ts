import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Employee';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  employees!: Employee[];

  constructor(private employeeService: EmployeeService, private router:Router){}
  ngOnInit(): void{
    this.getEmployee();

  }

  private getEmployee(){
    this.employeeService.getEmployeelist().subscribe(data => {
      this.employees = data;

    });
  }
  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);

  }

  updateEmployee(id:number){
    this.router.navigate(['update-employee',id]);


  }
  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe(data =>{
      console.log(data);
      this.getEmployee();
    })

  }

}
