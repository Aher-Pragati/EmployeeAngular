import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllocateProject } from 'src/app/pages/model/allocate-project';
import { Employee } from 'src/app/pages/model/employee';
import { Project } from 'src/app/pages/model/project';
import { AllocateProjectService } from 'src/app/pages/service/allocate-project.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-allocate-project',
  templateUrl: './view-allocate-project.component.html',
  styleUrls: ['./view-allocate-project.component.css'],
  preserveWhitespaces:true
})
export class ViewAllocateProjectComponent implements OnInit {
  allocateProjectList: AllocateProject[]
   projectList:Project[]
   employeeList:Employee[]

  constructor(private _allocateProjectService:AllocateProjectService,
              private _activateRouter:ActivatedRoute,
              private _router:Router) { }

  ngOnInit(): void {
    this.getAllAllocateProjectDetails();
  }
   
  getAllAllocateProjectDetails()
   {
   
          this._allocateProjectService.getAllAllocateProject().subscribe(
            (response)=>
            {
                       this.allocateProjectList=response;
                       console.log(response);
                       this._router.navigate(['/admin-dashboard/view-allocate-project']);
            },
            (error)=>
            {
                          console.log(error);
            });
  }

  

       deleteAllocateProject(id:number)
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
                this._allocateProjectService.deleteAllocateProjectById(id).subscribe(Response=>
                  {
                    this.getAllAllocateProjectDetails();
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
