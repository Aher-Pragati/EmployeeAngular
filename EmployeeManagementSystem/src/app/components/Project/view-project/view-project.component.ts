import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/pages/model/project';
import { ProjectService } from 'src/app/pages/service/project.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css'],
  preserveWhitespaces:true
})
export class ViewProjectComponent implements OnInit {
  projectList: Project[]
  constructor(
    private _projectService:ProjectService,
    private _router:Router) { }

ngOnInit(): void {
this.getAllProjectDetails();
}
getAllProjectDetails()
{

this._projectService.getAllProject().subscribe(
  (response)=>
  {
             this.projectList=response;
             console.log(response);
             this._router.navigate(['/admin-dashboard/view-project']);
  },
  (error)=>
  {
                console.log(error);
  });
}

deleteProject(id:number)
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
      this._projectService.deleteProjectById(id).subscribe(Response=>
        {
          this.getAllProjectDetails();
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

