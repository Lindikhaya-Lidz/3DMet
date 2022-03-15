import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import{ CreateAccountFormComponent }from'./create-account-form/create-account-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  
  {path:'', component:CreateAccountFormComponent},
  {path:'createAccount', component:CreateAccountFormComponent},
  {path:'login', component:LoginComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
