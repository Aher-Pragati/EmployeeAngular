import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AllocateProject } from 'src/app/pages/model/allocate-project';
import { AllocateProjectService } from 'src/app/pages/service/allocate-project.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-allocate-project',
  templateUrl: './update-allocate-project.component.html',
  styleUrls: ['./update-allocate-project.component.css'],
  preserveWhitespaces:true
})
export class UpdateAllocateProjectComponent implements OnInit {
  apid: number;
  allocateProject: AllocateProject;
  allocateProjectUpdate: FormGroup;

  constructor(private _formBuilder:FormBuilder, 
             private _allocateProjectService:AllocateProjectService,
             private _activateRoute:ActivatedRoute,
             private _router:Router)

{
  this.allocateProjectUpdate= _formBuilder.group(
{
   allocataeProjectId:[0],
   projectStatus:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(50)])],
}
);  

}

ngOnInit(): void
{  

    alert("hello");
    this.apid= this._activateRoute.snapshot.params['allocateProjectId'];

   this._allocateProjectService.getAllocateProjectById(this.apid).subscribe(responce=>
   {
         this.allocateProject=responce;
        console.log(responce);
        this.allocateProjectUpdate=this._formBuilder.group(
       {
  
           allocateProjectId:[responce.allocateProjectId],
           projectStatus:[responce.projectStatus,Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(50)])],
       }
   );

  },
  (error=>
  {
     console.log(error);
   })
 )
}
updateAllocateProject()
{
   if(this.allocateProjectUpdate.valid)
   {

       Swal.fire({
       title:'Do you want to update this allocate project record? ',
       showDenyButton:true,
      showCancelButton:true,
      confirmButtonText:'Update',
       denyButtonText:`Don't update`,
    }).then((result)=>{

   if(result.isConfirmed)
{
  this. _allocateProjectService.updateAllocateProject(this.allocateProjectUpdate.value,this.apid).subscribe(responce=>
    {
      Swal.fire('your record is updated !', '', 'success');
      console.log(responce);
      
      this._router.navigate(['/admin-dashboard/view-allocate-project']);
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
