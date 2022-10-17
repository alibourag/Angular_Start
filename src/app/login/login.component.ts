import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pageTitle = 'Log In'
  errorMessage=''

  constructor(private route :Router, private authService: AuthService) { }
  ngOnInit(): void {
  }
  Login(loginForm : NgForm){
    if(loginForm && loginForm.valid){
      const userName = loginForm.form.value.userName;
      const passWord = loginForm.form.value.password;
      this.authService.login(userName, passWord)
      if(this.authService.redirectUrl){
        this.route.navigateByUrl(this.authService.redirectUrl)
      }else{
      this.route.navigate(['/products'])
      }
    }else{
      this.errorMessage = 'Please enter a username and password.'
    }
  }
  isLogin(){  }


}
