import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private baseUrl="http://localhost:8080/";

 
  constructor(private _http:HttpClient) { }
  
  getAllProject():Observable<Project[]>
 {
  return this._http.get<Project[]>(`${this.baseUrl}project/`);
  }

  deleteProjectById(projectId:number)
  {
   return this._http.delete(`${this.baseUrl}project/${projectId}`);
   }
   getProjectById(projectId:number):Observable<Project>
    {
     return this._http.get<Project>(`${this.baseUrl}project/${projectId}`);
     }
  addProject(project:Project):Observable<Project>
     {
        return this. _http.post<Project>(`${this.baseUrl}project/`,project);
     }
     updateProject(project:Project,projectId:number):Observable<Project>
     {
      return this._http.put<Project>(`${this.baseUrl}project/${projectId}`,project);
      }
}
