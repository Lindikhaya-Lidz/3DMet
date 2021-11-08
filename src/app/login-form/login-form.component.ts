import { Component, OnInit } from '@angular/core';
import {FormsModule} from'@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  
  submitted:boolean = false;

  user = {
    fullName:'',
    emailAddress:'',
    password:''
  }

  onSubmit(user:any){
    console.log(user)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
