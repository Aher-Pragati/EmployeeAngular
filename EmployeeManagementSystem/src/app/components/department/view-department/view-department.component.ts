import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { Department } from 'src/app/pages/model/department';

import { DepartmentService } from 'src/app/pages/service/department.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-department',
  templateUrl: './view-department.component.html',
  styleUrls: ['./view-department.component.css'],
  preserveWhitespaces:true
})
export class ViewDepartmentComponent implements OnInit {
  departmentList: Department[];
  
  
  constructor(
              private _departmentService:DepartmentService,
              
              private _activateRouter:ActivatedRoute,
              private _router:Router) { }

  ngOnInit(): void {
    this.getAllDepartmentDetails();

    
  }
  getAllDepartmentDetails()
   {
   
          this._departmentService.getAllDepartment().subscribe(
            (response)=>
            {
                       this.departmentList=response;
                       console.log(response);
                       this._router.navigate(['/admin-dashboard/view-department']);
                       
                      
            },
            (error)=>
            {
                          console.log(error);
            });
  }
  
  

       deleteDepartment(id:number)
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
                this._departmentService.deleteDepartmentById(id).subscribe(Response=>
                  {
                    this.getAllDepartmentDetails();
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

  