import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/pages/model/department';
import { DepartmentService } from 'src/app/pages/service/department.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css'],
  preserveWhitespaces:true
})
export class UpdateDepartmentComponent implements OnInit 
{
    did: number;
    department: Department;
    departmentUpdate: FormGroup;

    constructor(private _formBuilder:FormBuilder, 
               private _departmentService:DepartmentService,
               private _activateRoute:ActivatedRoute,
               private _router:Router)

{
    this.departmentUpdate= _formBuilder.group(
  {
     departmentId:[0],
     departmentName:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])],
  }
);  

}

ngOnInit(): void
{  

      alert("hello");
      this.did= this._activateRoute.snapshot.params['departmentId'];

     this._departmentService.getDepartmentById(this.did).subscribe(responce=>
     {
           this.department=responce;
          console.log(responce);
          this.departmentUpdate=this._formBuilder.group(
         {
    
             departmentId:[responce.departmentId],
             departmentName:[responce.departmentName,Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])],
         }
     );

    },
    (error=>
    {
       console.log(error);
     })
   )
 }
 updateDepartment()
 {
     if(this.departmentUpdate.valid)
     {

         Swal.fire({
         title:'Do you want to update this Department record? ',
         showDenyButton:true,
        showCancelButton:true,
        confirmButtonText:'Update',
         denyButtonText:`Don't update`,
      }).then((result)=>{

     if(result.isConfirmed)
  {
    this. _departmentService.updateDepartment(this.departmentUpdate.value,this.did).subscribe(responce=>
      {
        Swal.fire('your record is updated !', '', 'success');
        console.log(responce);
        
        this._router.navigate(['/admin-dashboard/view-department']);
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
