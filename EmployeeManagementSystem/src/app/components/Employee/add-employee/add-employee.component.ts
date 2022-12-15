import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Department } from 'src/app/pages/model/department';
import { DepartmentService } from 'src/app/pages/service/department.service';
import Swal from 'sweetalert2';
import { EmployeeService } from '../../../pages/service/employee.service';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
  preserveWhitespaces:true,
})
export class AddEmployeeComponent implements OnInit
 {
       employeeReg:FormGroup;
       departmentList:Department[];
      
     
       constructor(private _formBuilder:FormBuilder, 
              private _employeeService:EmployeeService,
              private _departmentService:DepartmentService,
              private _router:Router)  
   {
      this.employeeReg=this. _formBuilder.group(
        {
          employeeId:[0],
          department:['',Validators.required],

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
  
  ngOnInit(): void {
    this.getAllDepartment();
  } 
  getAllDepartment()
  {
        this._departmentService.getAllDepartment().subscribe((response:Department[])=>
        {
            this.departmentList=response;
        },
        (error)=>
        {
            console.log(error);
        })
  }
  register()
  {
     if(this.employeeReg.valid)
     {
        
      Swal.fire({
        title: 'Do you want to save this Employee record?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) 
       {

          this. _employeeService.addEmployee(this.employeeReg.value).subscribe(responce=>
            {
              Swal.fire('Saved!', '', 'success')
              this._router.navigate(['/admin-dashboard/view-employee']);
              
              
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
    console.log(this.employeeReg.valid);
    console.log(this.employeeReg.value);  

  }
}
 }



