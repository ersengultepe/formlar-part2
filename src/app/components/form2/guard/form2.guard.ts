import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Form2Component } from '../form2.component';

@Injectable({
  providedIn: 'root'
})
export class Form2Guard implements CanDeactivate<unknown> {
  canDeactivate(
    component: Form2Component,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("CanDeactive çalıştı");    
      
      return component.canDeactive();      
  }
  
}
