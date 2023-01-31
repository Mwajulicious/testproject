import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule}  from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { EmployeeListComponent } from './Pages/employee-list/employee-list.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateMployeeComponent } from './Pages/create-mployee/create-mployee.component'
import { FormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './Pages/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './Pages/employee-details/employee-details.component';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { LoginComponent } from './Pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateMployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    LoginComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatProgressBarModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
