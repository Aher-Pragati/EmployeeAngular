import { AllocateProject } from "./allocate-project";
import { Employee } from "./employee";

export class Project 
{
    projectId:number;
     
     projectName:String; 
     
     startDate:Date;
     
     endDate:Date;

     projectStatus:String;

     
    allocateProjectList:AllocateProject[];
	
}
