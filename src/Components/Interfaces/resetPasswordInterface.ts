export interface RequestResetData {
   email: string;
 }
 
 export interface ResetPasswordData {
   email: string;
   otp: string;
   newPassword: string;
 }
 