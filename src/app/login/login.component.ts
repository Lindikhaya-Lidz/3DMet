import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  userNameOrEmail:string='';
  password:string ='';
  
  login(){
    alert('Your logged in');

  }
  ngOnInit(): void {
  }

}
