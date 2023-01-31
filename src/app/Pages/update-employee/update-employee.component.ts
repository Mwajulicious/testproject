import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Employee';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
   id! : number;
  employee: Employee = new Employee();

  constructor(private employeeServices: EmployeeService, private route: ActivatedRoute, private router:Router){}
ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];
  this.employeeServices.getEmployeeById(this.id).subscribe(data =>{
    this.employee = data
  },error => console.log(error));
  
}



onSubmit() {
  this.employeeServices.updateEmployee(this.id, this.employee).subscribe(data =>{
    this.goToEmployeeList();


  },error => console.log(error))

}
goToEmployeeList(){
  this.router.navigate(['/employee-list']);
}


}
