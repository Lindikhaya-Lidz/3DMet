import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  
  url = 'src/assets/db.json';

  createUser(user:{}){
    return this.http.post(this.url,user)
  }

  constructor(private http:HttpClient) { }
}
