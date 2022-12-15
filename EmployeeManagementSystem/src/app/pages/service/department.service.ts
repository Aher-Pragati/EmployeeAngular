import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../model/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private baseUrl="http://localhost:8080/";

 
  constructor(private _http:HttpClient) { }
  
  getAllDepartment():Observable<Department[]>
 {
   return this._http.get<Department[]>(`${this.baseUrl}department/`);
  }
 
  //  getAllDepartmentByProjectId(pid:number):Observable<Department[]>
  //  {
  //   return this._http.get<Department[]>(`${this.baseUrl}department/project/${pid}`);
  //   }
  deleteDepartmentById(departmentId:number)
  {
   return this._http.delete(`${this.baseUrl}department/${departmentId}`);
   }
   getDepartmentById(departmentId:number):Observable<Department>
    {
     return this._http.get<Department>(`${this.baseUrl}department/${departmentId}`);
     }
  addDepartment(department:Department):Observable<Department>
     {
        return this. _http.post<Department>(`${this.baseUrl}department/`,department);
     }
     updateDepartment(department:Department,departmentId:number):Observable<Department>
     {
      return this._http.put<Department>(`${this.baseUrl}department/${departmentId}`,department);
      }
}
