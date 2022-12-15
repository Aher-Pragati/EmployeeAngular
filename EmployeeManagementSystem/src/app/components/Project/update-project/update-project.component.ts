import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/pages/model/project';
import { ProjectService } from 'src/app/pages/service/project.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css'],
  preserveWhitespaces:true
})
export class UpdateProjectComponent implements OnInit {

  pid: number;
  project: Project;
  projectUpdate: FormGroup;

  constructor(private _formBuilder:FormBuilder, 
    private _projectService:ProjectService,
    private _activateRoute:ActivatedRoute,
    private _router:Router)

{
this.projectUpdate= _formBuilder.group(
{
projectId:[0],
projectName:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(40)])],
startDate:['',Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(20)])],
endDate:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])],
projectStatus:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(40)])]   
   
}
);  

}

ngOnInit(): void
{  

alert("hello");
this.pid= this._activateRoute.snapshot.params['projectId'];

this._projectService.getProjectById(this.pid).subscribe(responce=>
{
this.project=responce;
console.log(responce);
this.projectUpdate=this._formBuilder.group(
{

  projectId:[responce.projectId],
  projectName:[responce.projectName,Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])],
  startDate:[responce.startDate,Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(20)])],
  endDate:[responce.endDate,Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])],
  projectStatus:[responce.projectStatus,Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(40)])]   
   
}
);

},
(error=>
{
console.log(error);
})
)
}
updateProject()
{
if(this.projectUpdate.valid)
{

Swal.fire({
title:'Do you want to update this project record? ',
showDenyButton:true,
showCancelButton:true,
confirmButtonText:'Update',
denyButtonText:`Don't update`,
}).then((result)=>{

if(result.isConfirmed)
{
this. _projectService.updateProject(this.projectUpdate.value,this.pid).subscribe(responce=>
{
Swal.fire('your record is updated !', '', 'success');
console.log(responce);

this._router.navigate(['/admin-dashboard/view-project']);
},
(error)=>
{
console.log(error);
}
)


} else if (result.isDenied) {
Swal.fire('Changes are not updated', '', 'info')
}
})

}
}
}  

