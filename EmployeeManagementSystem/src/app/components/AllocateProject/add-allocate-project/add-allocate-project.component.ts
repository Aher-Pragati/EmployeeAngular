import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Employee } from 'src/app/pages/model/employee';
import { Project } from 'src/app/pages/model/project';
import { AllocateProjectService } from 'src/app/pages/service/allocate-project.service';
import { EmployeeService } from 'src/app/pages/service/employee.service';
import { ProjectService } from 'src/app/pages/service/project.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-allocate-project',
  templateUrl: './add-allocate-project.component.html',
  styleUrls: ['./add-allocate-project.component.css'],
  preserveWhitespaces:true
})
export class AddAllocateProjectComponent implements OnInit {
  
  
  allocateProjectReg:FormGroup;
  employeeList: Employee[];
  projectList: Project[];
  
   
  
  constructor(private _formBuilder:FormBuilder, 
        private _allocateProjectService:AllocateProjectService,
        private _employeeService:EmployeeService,
        private _projectService:ProjectService,
         private _router:Router)  
{
 this.allocateProjectReg=this. _formBuilder.group(
   {
     allocateProjectId:[0],
     employee:['',Validators.required],
     project:['',Validators.required],
     projectStatus:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(50)])]
     
   }
 );
}
ngOnInit(): void {
  this.getAllEmployee();
  this.getAllProject();
}
getAllEmployee()
{
      this._employeeService.getAllEmployee().subscribe((response:Employee[])=>
      {
          this.employeeList=response;
      },
      (error)=>
      {
          console.log(error);
      })
}

getAllProject()
{
      this._projectService.getAllProject().subscribe((response:Project[])=>
      {
          this.projectList=response;
      },
      (error)=>
      {
          console.log(error);
      })
}

register()
{
   if(this.allocateProjectReg.valid)
   {
      
    Swal.fire({
      title: 'Do you want to save this Allocate Project record?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) 
     {

        this. _allocateProjectService.addAllocateProject(this.allocateProjectReg.value).subscribe(responce=>
          {
            Swal.fire('Saved!', '', 'success')
            this._router.navigate(['/admin-dashboard/view-allocate-project']);
            
            
          },
          (error=>
          {
               console.log(error);
          })
          );

       
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  console.log(this.allocateProjectReg.valid);
  console.log(this.allocateProjectReg.value);  

}
}
}


