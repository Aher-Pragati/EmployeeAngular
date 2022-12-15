import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  //http://localhost:8080/employee/

  private baseUrl="http://localhost:8080/";
  
  
  // Dependency injection
constructor(private _http:HttpClient)
 { }

 getAllEmployee():Observable<Employee[]>
 {
  return this._http.get<Employee[]>(`${this.baseUrl}employee/`);
  }
  getAllEmployeeByDepartmentId(did:number):Observable<Employee[]>
 {
  return this._http.get<Employee[]>(`${this.baseUrl}employee/department/${did}`);
  }

  deleteEmployeeById(employeeId:number)
  {
   return this._http.delete(`${this.baseUrl}employee/${employeeId}`);
   }

  addEmployee(employee:Employee):Observable<Employee>
     {
        return this. _http.post<Employee>(`${this.baseUrl}employee/`,employee);
     }

     getEmployeeById(employeeId:number):Observable<Employee>
    {
     return this._http.get<Employee>(`${this.baseUrl}employee/${employeeId}`);
     }

   updateEmployee(employee:Employee,employeeId:number):Observable<Employee>
   {
    return this._http.put<Employee>(`${this.baseUrl}employee/${employeeId}`,employee);
    }

    checkLogin(email1:string,password1:string):Observable<Employee>
    {
       let httpParam = new HttpParams();
       httpParam=httpParam.append("employeeEmail",email1);
       httpParam=httpParam.append("password",password1);

       return this._http.get<Employee>(`${this.baseUrl}employee/check`,{params:httpParam});
    }

}
