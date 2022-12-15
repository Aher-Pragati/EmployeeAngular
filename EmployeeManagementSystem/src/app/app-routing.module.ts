import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/Employee/add-employee/add-employee.component';
import { AdminAuthenticationGuardGuard } from './components/admin-authentication-guard.guard';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ResourcenotfoundComponent } from './pages/resourcenotfound/resourcenotfound.component';
import { UpdateEmployeeComponent } from './components/Employee/update-employee/update-employee.component';
import { UserAuthenticationGuardGuard } from './components/user-authentication-guard.guard';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { ViewEmployeeComponent } from './components/Employee/view-employee/view-employee.component';
import { AddDepartmentComponent } from './components/department/add-department/add-department.component';
import { ViewDepartmentComponent } from './components/department/view-department/view-department.component';
import { UpdateDepartmentComponent } from './components/department/update-department/update-department.component';
import { AddProjectComponent } from './components/Project/add-project/add-project.component';
import { UpdateProjectComponent } from './components/Project/update-project/update-project.component';
import { ViewProjectComponent } from './components/Project/view-project/view-project.component';
import { ViewAllocateProjectComponent } from './components/AllocateProject/view-allocate-project/view-allocate-project.component';
import { AddAllocateProjectComponent } from './components/AllocateProject/add-allocate-project/add-allocate-project.component';
import { UpdateAllocateProjectComponent } from './components/AllocateProject/update-allocate-project/update-allocate-project.component';

const routes: Routes = [
   
 
  {path:'',component:LoginComponent},
 
  {path:'admin-login',component:LoginComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent,canActivate:[AdminAuthenticationGuardGuard],
     children:
     [
      {path:'add-employee',component:AddEmployeeComponent},
      {path:'view-employee',component:ViewEmployeeComponent},
      {path:'viewEmployee/:departmentId',component:ViewEmployeeComponent},
       {path:'updateemployee/:employeeId',component:UpdateEmployeeComponent},
      
      {path:'add-department',component:AddDepartmentComponent},
      {path:'view-department',component:ViewDepartmentComponent},
      {path:'updatedepartment/:departmentId',component:UpdateDepartmentComponent},

      {path:'add-project',component:AddProjectComponent},
      {path:'view-project',component:ViewProjectComponent},
      {path:'updateproject/:projectId',component:UpdateProjectComponent},

      {path:'view-allocate-project',component:ViewAllocateProjectComponent},
      {path:'view-allocate-project/:employeeId',component:ViewAllocateProjectComponent},
      {path:'add-allocate-project',component:AddAllocateProjectComponent},
      {path:'updateallocateProject/:allocateProjectId',component:UpdateAllocateProjectComponent},

     ]
  },
 
  {path:'user-dashboard',component:UserDashboardComponent,canActivate:[UserAuthenticationGuardGuard],
    children:
    [
      {path:'add-employee',component:AddEmployeeComponent},
      {path:'view-employee',component:ViewEmployeeComponent},
      {path:'updateemployee/:employeeId',component:UpdateEmployeeComponent},

      {path:'add-department',component:AddDepartmentComponent},
      {path:'view-department',component:ViewDepartmentComponent},
      {path:'updatedepartment/:departmentId',component:UpdateDepartmentComponent},

      {path:'add-project',component:AddProjectComponent},
      {path:'view-project',component:ViewProjectComponent},
      {path:'updateproject/:projectId',component:UpdateProjectComponent},

      {path:'view-allocate-project',component:ViewAllocateProjectComponent},
      {path:'add-allocate-project',component:AddAllocateProjectComponent},
      {path:'updateallocateProject/:allocateProjectId',component:UpdateAllocateProjectComponent},

    ]

 },

  //{path:'**',component:ResourcenotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}