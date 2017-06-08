import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable()
export class canActivateGuard implements CanActivate {

  constructor(private router:Router) { }

  canActivate(){
    let authToken = localStorage.getItem('token');
    if(authToken == null){
    	this.router.navigate(['/login']);
      return false;
    }else{
      return true;
    }
  }

}
