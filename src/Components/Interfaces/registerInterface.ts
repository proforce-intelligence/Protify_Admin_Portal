export interface RegisterUserInput {
   firstName: string;
   lastName: string;
   email: string;
   phoneNumber: string;
   password: string;
   confirmPassword: string;
 }
 
 export interface User {
   id: string;
   firstName: string;
   lastName: string;
   email: string;
   phoneNumber: string;
   confirmPassword: string;
 }
 