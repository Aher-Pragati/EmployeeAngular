import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Department } from 'src/app/pages/model/department';
import { DepartmentService } from 'src/app/pages/service/department.service';
import { ProjectService } from 'src/app/pages/service/project.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
  preserveWhitespaces:true
})
export class AddProjectComponent implements OnInit {
  projectReg:FormGroup;
  
  constructor(private _formBuilder:FormBuilder, 
        private _projectService:ProjectService,
        
         private _router:Router)  
{
 this.projectReg=this. _formBuilder.group(
   {
     projectId:[0],
    
     projectName:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(40)])],
     startDate:['',Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(20)])],
    endDate:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])],
    projectStatus:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(40)])]   
   }
 );
}
ngOnInit(): void {
}
register()
{
   if(this.projectReg.valid)
   {
      
    Swal.fire({
      title: 'Do you want to save this Project record?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) 
     {

        this. _projectService.addProject(this.projectReg.value).subscribe(responce=>
          {
            Swal.fire('Saved!', '', 'success')
            this._router.navigate(['/admin-dashboard/view-project']);
            
            
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
  console.log(this.projectReg.valid);
  console.log(this.projectReg.value);  

}
}
}


