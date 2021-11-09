import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  
  user = {
    
    fullName:'',
    emailAddress:'',
    password:''

  }
  constructor() { }
}
