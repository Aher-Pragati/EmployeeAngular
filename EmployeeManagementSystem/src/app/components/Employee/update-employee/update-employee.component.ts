import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Employee } from '../../../pages/model/employee';
import { EmployeeService } from '../../../pages/service/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
  preserveWhitespaces:true
})
export class UpdateEmployeeComponent implements OnInit 
{


  
  
  
  eid: number;
  employee: Employee;
  
  employeeUpdate: FormGroup;
  
  constructor(private _formBuilder:FormBuilder, 
              private _employeeService:EmployeeService,
              private _activateRoute:ActivatedRoute,
              private _router:Router)
   
    {
      this.employeeUpdate= _formBuilder.group(
        {
          employeeId:[0],
          employeeName:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])],
          employeeAddress:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])],
          employeeSalary:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])],
          employeeGender:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])],
          employeeContactNumber:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])],
          employeeEmail:['',Validators.compose([Validators.required,Validators.email])],
          password:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(10)])],
          employeeDOB:['',Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(20)])],
          employeeDateOfJoin:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])],
        }
      );  

    }

  ngOnInit(): void
   {  
   
    alert("hello");
     this.eid= this._activateRoute.snapshot.params['employeeId'];

     this._employeeService.getEmployeeById(this.eid).subscribe(responce=>
      {
           this.employee=responce;
           console.log(responce);
           this.employeeUpdate=this._formBuilder.group(
            {
              
              employeeId:[responce.employeeId],
              employeeName:[responce.employeeName,Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])],
              employeeAddress:[responce.employeeAddress,Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])],
              employeeSalary:[responce.employeeSalary,Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])],
              employeeGender:[responce.employeeGender,Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])],
              employeeContactNumber:[responce.employeeContactNumber,Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])],
              employeeEmail:[responce.employeeEmail,Validators.compose([Validators.required,Validators.email])],
              password:[responce.password,Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(10)])],
              employeeDOB:[responce.employeeDOB,Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(20)])],
              employeeDateOfJoin:[responce.employeeDateOfJoin,Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])],
            }
          );

         
           
      },
      (error=>
      {
        console.log(error);
      })
     )
}
  updateEmployee()
  {
     if(this.employeeUpdate.valid)
     {
       
        Swal.fire({
          title:'Do you want to update this employee record? ',
          showDenyButton:true,
          showCancelButton:true,
          confirmButtonText:'Update',
          denyButtonText:`Don't update`,
        }).then((result)=>{

            if(result.isConfirmed)
            {
              this. _employeeService.updateEmployee(this.employeeUpdate.value,this.eid).subscribe(responce=>
                {
                  Swal.fire('your record is updated !', '', 'success');
                  console.log(responce);
                  
                  this._router.navigate(['/admin-dashboard/view-employee']);
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