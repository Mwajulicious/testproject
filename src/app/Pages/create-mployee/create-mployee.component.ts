import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Employee';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-create-mployee',
  templateUrl: './create-mployee.component.html',
  styleUrls: ['./create-mployee.component.css']
})
export class CreateMployeeComponent implements OnInit {
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService, private router: Router){
    
  }
  ngOnInit(): void {
    this.saveEmployee
  }
  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data =>{
      console.log(data)
      this.goToEmployeeList();
     
    }, error => console.log(error));

  }
  goToEmployeeList(){
    this.router.navigate(['/employee-list']);
  }

  onSubmit(){
    this.saveEmployee();
    console.log(this.employee)

  }

}

