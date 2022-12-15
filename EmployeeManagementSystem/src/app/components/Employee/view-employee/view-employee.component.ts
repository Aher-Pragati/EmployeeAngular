import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Employee } from '../../../pages/model/employee';
import { EmployeeService } from '../../../pages/service/employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css'],
  preserveWhitespaces:true
})
export class ViewEmployeeComponent implements OnInit {
  
  employeeList: Employee[];
  did:any;
  constructor(private _employeeService:EmployeeService,
            private _activateRouter:ActivatedRoute,
              private _router:Router) { }

  ngOnInit(): void 
  {
  
    this.did= this._activateRouter.snapshot.params['departmentId'];
    alert("Did.."+this.did);
    if(this.did==undefined)
    {
      this.getAllEmployeeDetails();
         
    }
    else if(this.did>0)
      {
        this.getEmployeeByDepartmentId();
    }
   
   
  }
  getAllEmployeeDetails()
   {
   
          this._employeeService.getAllEmployee().subscribe(
            (response)=>
            {
                       this.employeeList=response;
                       console.log(response);
                       this._router.navigate(['/admin-dashboard/view-employee']);
            },
            (error)=>
            {
                          console.log(error);
            });
  }
  getEmployeeByDepartmentId()
  {
      this._employeeService.getAllEmployeeByDepartmentId(this.did).subscribe(
        (response)=>
        {
          this.employeeList=response;
          console.log(response);
        },
        (error)=>
        {
          console.log(error);
        }
      );
  }

       deleteEmployee(id:number)
       {
            const SwalWithBootstrapButtons = Swal.mixin({
              customClass:{
                confirmButton:'btn btn-success',
                cancelButton:'btn btn-danger'
              },
              buttonsStyling:false
            })
            SwalWithBootstrapButtons.fire({
              title:'Are you sure to delete data?',
              text:"You won't be able to revert this!",
              icon:'warning',
              showCancelButton: true,
              confirmButtonText:'Yes,delete it!',
              cancelButtonText:'No, cancel!',
              reverseButtons:true
            }).then((result) => {
              if (result.isConfirmed)
              {
                this._employeeService.deleteEmployeeById(id).subscribe(Response=>
                  {
                    this.getAllEmployeeDetails();
                    SwalWithBootstrapButtons.fire(
                      'Deleted!',
                      'Your record has been deleted.',
                      'success'
                    )
                  },
                  (error=>
                    {
                      console.log(error);
                      
                    })
                  );
                } else if(
                  /*Read more about handling dismissals bolow */
                  result.dismiss===Swal.DismissReason.cancel
                ){
                  SwalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe ',
                    'error'
                  )
                }
            })
       }

}

  


