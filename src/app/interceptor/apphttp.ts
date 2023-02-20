import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";




@Injectable()
export class http1 implements HttpInterceptor {
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({headers : req.headers.set('Authorization','tggd5ehg465f4b648v')
           .set('ogrlid','1')
            .set ('authorization','letestt..')
    
    }) 
    
        return next.handle(req)
    }
}



