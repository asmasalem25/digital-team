import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class RoutegaurdService implements CanActivate {

  constructor(private router:Router) { }
  canActivate(route:ActivatedRouteSnapshot, state :RouterStateSnapshot ){
    if(localStorage.getItem('currentUser')){
      return true //log in 
    } 
    this.router.navigate(['/Login'],{queryParams:{returnUrl:state.url}})
    return false
}
}