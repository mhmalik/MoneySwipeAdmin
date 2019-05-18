import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable()
export class InterceptService implements HttpInterceptor {
  constructor(private route: Router) {}

  // intercept request and add token
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // // modify request
    // request = request.clone({
    //   setHeaders: {
    //     Authorization: `Bearer ${localStorage.getItem("MY_TOKEN")}`
    //   }
    // });

    // console.log("----request----");

    // console.log(request);

    // console.log("--- end of request---");

    return next.handle(request).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
            //console.log(" all looks good");
            // http response status code
            console.log(event.status);
          }
        },
        error => {
          // http response status code
          if (error.status === 401) {
            console.log("status code:" + error.status);
            localStorage.removeItem("userData");
            localStorage.removeItem("token");
            this.route.navigateByUrl("/");
          }
          // console.error(error.status);
          // console.error(error.message);
          // console.log("--- end of response---");
        }
      )
    );
  }
}
