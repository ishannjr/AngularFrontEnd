// filepath: /Users/ishaanmandliya/Documents/AppliedCrypto/Project/AngularFrontEnd/src/app/interceptors/http.interceptor.ts
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the custom header
    const modifiedReq = req.clone({
      setHeaders: {
        'user-id': '10' // Add the user-id header
      }
    });

    // Pass the modified request to the next handler
    return next.handle(modifiedReq);
  }
}