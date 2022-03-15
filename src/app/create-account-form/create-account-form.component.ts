import { Component, OnInit,Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'stream';
import{ UserDataService }from'../user-data.service';

@Component({
  selector: 'app-create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.scss']
})

export class CreateAccountFormComponent implements OnInit {
  @Output() showHome = new EventEmitter<boolean>()
  user = { 
    fullName:'',
    emailAddress:'',
    password:''

  }
  
  onSubmit(){
    this.userData.createUser(this.user).subscribe();
    console.log(this.user)
    alert(`Account creation was successful, Welcome ${this.user.fullName}`);
    return this.showHome.emit(true);
  }

  loginShow =false;

  create(){
    this.loginShow = true;
  }
  googleAuth(response:{}){
    console.log(response)
  }
  

  constructor(public userData:UserDataService) { }

  ngOnInit(): void {
  }

}
