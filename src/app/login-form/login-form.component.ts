import { Component, OnInit } from '@angular/core';
import{ UserDataService }from'../user-data.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  
  submitted:boolean = false;

  onSubmit(user:any){
    console.log(this.userData.user)
  }

  constructor(public userData:UserDataService) { }

  ngOnInit(): void {
  }

}
