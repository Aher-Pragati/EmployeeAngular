import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../pages/service/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  preserveWhitespaces:true
})
export class LoginComponent implements OnInit {

   loginForm:FormGroup;
  

  constructor(private _formBuilder:FormBuilder,private _employeeService:EmployeeService,private _router:Router) 
  {
      this.loginForm=_formBuilder.group(
        {
           employeeEmail:['',],
           password:['',]
        }
      ); 
  }

  ngOnInit(): void {
    
        sessionStorage.removeItem("email");

  }

  checkLogin()
  {
     if(this.loginForm.valid)
     {
        console.log(this.loginForm.value);

        var email = this.loginForm.get('employeeEmail')?.value;
        var password = this.loginForm.get('password')?.value;

        if(email=='admin@gmail.com' && password=='admin')
        {
           sessionStorage.setItem("email",email);
           this._router.navigate(['admin-dashboard/view-employee']);
        }
        else{
        this._employeeService.checkLogin(email,password).subscribe(responce=>
         {
            sessionStorage.setItem("email",email);
            if(responce!=null)
            {
               alert("Login Successfully");
               this._router.navigate(['user-dashboard/view-employee']);
            }
            else
            {
               alert("Login failed");
            }

         },
         (error)=>
         {
            console.log(error);
         })
      }
     }
  }

}

