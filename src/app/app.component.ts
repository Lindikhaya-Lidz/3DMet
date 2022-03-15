import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = '3DMet';
  logged= false;

  getStatus(status:boolean){
    this.logged = true;
  }

}
