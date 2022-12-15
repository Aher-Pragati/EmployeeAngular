import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartmentService } from '../../../pages/service/department.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css'],
  preserveWhitespaces:true
})
export class AddDepartmentComponent implements OnInit 
{
  
  
  
    departmentReg:FormGroup;
    
   
  
    constructor(private _formBuilder:FormBuilder, 
          private _departmentService:DepartmentService,
         
           private _router:Router)  
{
   this.departmentReg=this. _formBuilder.group(
     {
       departmentId:[0],
       departmentName:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])]
       
     }
   );
}
  ngOnInit(): void {
  
  }
 
  register()
  {
     if(this.departmentReg.valid)
     {
        
      Swal.fire({
        title: 'Do you want to save this Department record?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) 
       {

          this. _departmentService.addDepartment(this.departmentReg.value).subscribe(responce=>
            {
              Swal.fire('Saved!', '', 'success')
              this._router.navigate(['/admin-dashboard/view-department']);
              
              
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
    console.log(this.departmentReg.valid);
    console.log(this.departmentReg.value);  

  }
}
 }

