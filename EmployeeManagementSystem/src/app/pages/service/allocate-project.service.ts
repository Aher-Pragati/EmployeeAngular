import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllocateProject } from '../model/allocate-project';

@Injectable({
  providedIn: 'root'
})
export class AllocateProjectService {
  private baseUrl="http://localhost:8080/";

  constructor(private _http:HttpClient) { }

  getAllAllocateProject():Observable<AllocateProject[]>
 {
  return this._http.get<AllocateProject[]>(`${this.baseUrl}allocateProject/`);
  }
  getAllAllocateProjectByEmployeeId(eid:number):Observable<AllocateProject[]>
 {
  return this._http.get<AllocateProject[]>(`${this.baseUrl}allocateProject/employee/${eid}`);
  }

  deleteAllocateProjectById(allocateProjectId:number)
  {
   return this._http.delete(`${this.baseUrl}allocateProject/${allocateProjectId}`);
   }
   getAllocateProjectById(allocateProjectId:number):Observable<AllocateProject>
    {
     return this._http.get<AllocateProject>(`${this.baseUrl}allocateProject/${allocateProjectId}`);
     }

      addAllocateProject(allocateProject:AllocateProject):Observable<AllocateProject>
     {
        return this. _http.post<AllocateProject>(`${this.baseUrl}allocateProject/`,allocateProject);
      }
     updateAllocateProject(allocateProject:AllocateProject,allocateProjectId:number):Observable<AllocateProject>
     {
       return this._http.put<AllocateProject>(`${this.baseUrl}allocateProject/${allocateProjectId}`,allocateProject);
    }
}
