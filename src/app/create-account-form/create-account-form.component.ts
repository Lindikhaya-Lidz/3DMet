import { Component, OnInit } from '@angular/core';
import{ UserDataService }from'../user-data.service';

@Component({
  selector: 'app-create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.scss']
})

export class CreateAccountFormComponent implements OnInit {
  
  onSubmit(){
    alert(`Account creation was successful, Welcome ${this.userData.user.fullName}`)
  }

  loginShow =false;

  login(){
    this.loginShow = true;
  }

  constructor(public userData:UserDataService) { }

  ngOnInit(): void {
  }

}
