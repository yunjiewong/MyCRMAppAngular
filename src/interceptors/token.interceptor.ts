import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgSelectOption } from '@angular/forms';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let t:any ="";
    if(localStorage.hasOwnProperty("token")){
      t = localStorage.getItem("token");
      return next.handle(request.clone({
        setHeaders:{
          Authorization:"bearer " +t
        }
      }));
    }
    return next.handle(request);
    
  }
}
