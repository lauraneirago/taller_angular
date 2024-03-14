import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/products.model'

@Injectable({
  providedIn: 'root'
})

export class ServiceMainService{
  public url: string=environment.ApiUrl;

  constructor(public http:HttpClient){}

  gerProducts():Observable<Product[]>{
        return this.http.get<Product[]>(this.url)
  }
}







//export class AuthInterceptorServiceService implements HttpInterceptor {


//  constructor() {  }

//  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//    let clonedRequest: HttpRequest<any>;
//    clonedRequest = req.clone({
//      setHeaders: {
//        Authorization: ""
//    }
//    }) as HttpRequest<any>;
//    return next.handle(clonedRequest)
//  }
//}
