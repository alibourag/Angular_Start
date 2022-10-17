import { Injectable } from '@angular/core';
import { user } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser : user | undefined
  redirectUrl =''

  constructor() { }

  get isLoggenIn():boolean{
return !!this.currentUser
  }

  login(username : string , password : string ):void{
    if(!username || !password){
      console.log('error')
      return
    }
    if(username === 'admin'){
      this.currentUser ={
        id:1,
        username,
        isAdmin :true
      }
      console.log("admin login")
      return
    }
    this.currentUser={
      id:2,
      username,
      isAdmin:false
    }
  }

  logout(){
    this.currentUser = undefined
  }
}
