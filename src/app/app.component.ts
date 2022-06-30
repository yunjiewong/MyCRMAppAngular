import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  flag:boolean = true;
  constructor(private router:Router){}

  isLoggedIn = localStorage.hasOwnProperty('token');

  title = 'MyCRMAppAngular';

  logout(){
    localStorage.removeItem("token");
    localStorage.clear();
    this.router.navigateByUrl("login");
  }
  GO(){
    this.router.navigateByUrl("login");
    this.flag= false
  }

}
