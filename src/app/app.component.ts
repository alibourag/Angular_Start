import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Angular: Getting Started';

  constructor(private router : Router, private authService : AuthService ){}

  get isLoggedIn(): boolean {
    return this.authService.isLoggenIn
  }


  displayMessage(){}
  hideMessage(){}
  logOut(){
    this.authService.logout()
    this.router.navigateByUrl('/welcome')
  }
}
