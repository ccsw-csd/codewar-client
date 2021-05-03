import { Role } from "./Role";

export interface User {
    id: number; 
    username: string; 
    role: string;
    firstName: string; 
    lastName: string; 
    mail: string; 
    dateCreation: Date;
}
  