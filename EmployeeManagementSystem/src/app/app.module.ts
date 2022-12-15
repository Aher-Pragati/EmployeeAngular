import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {  HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewEmployeeComponent } from './components/Employee/view-employee/view-employee.component';
import { UpdateEmployeeComponent } from './components/Employee/update-employee/update-employee.component';
import { AddEmployeeComponent } from './components/Employee/add-employee/add-employee.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { ResourcenotfoundComponent } from './pages/resourcenotfound/resourcenotfound.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserNavbarComponent } from './components/user-navbar/user-navbar.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddDepartmentComponent } from './components/department/add-department/add-department.component';
import { ViewDepartmentComponent } from './components/department/view-department/view-department.component';
import { UpdateDepartmentComponent } from './components/department/update-department/update-department.component';
import { ViewProjectComponent } from './components/Project/view-project/view-project.component';
import { AddProjectComponent } from './components/Project/add-project/add-project.component';
import { UpdateProjectComponent } from './components/Project/update-project/update-project.component';
import { ViewAllocateProjectComponent } from './components/AllocateProject/view-allocate-project/view-allocate-project.component';
import { AddAllocateProjectComponent } from './components/AllocateProject/add-allocate-project/add-allocate-project.component';
import { UpdateAllocateProjectComponent } from './components/AllocateProject/update-allocate-project/update-allocate-project.component';
@NgModule({
  declarations: [
    AppComponent,
    ViewEmployeeComponent,
    UpdateEmployeeComponent,
    AddEmployeeComponent,
    AdminDashboardComponent,
    AdminNavbarComponent,
    ResourcenotfoundComponent,
    UserDashboardComponent,
    UserNavbarComponent,
    LoginComponent,
    AddDepartmentComponent,
    ViewDepartmentComponent,
    UpdateDepartmentComponent,
    ViewProjectComponent,
    AddProjectComponent,
    UpdateProjectComponent,
    ViewAllocateProjectComponent,
    AddAllocateProjectComponent,
    UpdateAllocateProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
