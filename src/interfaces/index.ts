import { Request } from 'express'; // Assuming you're using Express


export interface AccountData {
    id: number;
    username: string;
    email: string;
  }

  export interface TaskData {
    id: number;
    title: string;
    description: string;
  }


export interface CustomRequest extends Request {
    userData?: any; 
}
  
