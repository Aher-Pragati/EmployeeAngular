import { AllocateProject } from "./allocate-project";
import { Department } from "./department";

export class Employee 
{
	employeeId:number;
	
	 employeeName:String;
	
	 employeeAddress:String;
	
	employeeSalary:number
	
	  employeeGender:String;
	 
	 employeeContactNumber:number;
	 
	 employeeEmail:String;
	 
	 password:String;

	employeeDOB:Date;

    employeeDateOfJoin:Date;
    
    department:Department;


	
    
	
	 allocateProjectList:AllocateProject[];
}
