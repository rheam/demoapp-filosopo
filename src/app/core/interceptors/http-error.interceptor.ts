import {
    HttpEvent,   
    HttpInterceptor,   
    HttpHandler,   
    HttpRequest,  
    HttpResponse,   
    HttpErrorResponse 
} from '@angular/common/http';  
import { Observable } from 'rxjs';
import { LoaderService } from '../services/loader.service'; 
import { Injectable } from '@angular/core'; 
import {Router} from "@angular/router";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor { 

    private requests: HttpRequest<any>[] = [];

    constructor(private loaderService: LoaderService, private router: Router) { }

    removeRequest(req: HttpRequest<any>) {
        const i = this.requests.indexOf(req);
        if (i >= 0) {
        this.requests.splice(i, 1);
        }
       
        this.loaderService.isLoading.next(this.requests.length > 0);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.requests.push(req);
        console.log("No of requests--->" + this.requests.length);  
          
        this.loaderService.isLoading.next(true);
        return Observable.create(observer => {
            const subscription = next.handle(req)
            .subscribe(
                event => {
                    if (event instanceof HttpResponse) {
                        this.removeRequest(req);
                        observer.next(event);
                    }
                },
                err => {
                    /* redirects to 404 page  */
                    if (err instanceof HttpErrorResponse && err.status == 404) {
                        this.router.navigateByUrl('/404', {replaceUrl: true});
                    }

                alert('error' + JSON.stringify(err));
                this.removeRequest(req);
                observer.error(err);
            },
            () => {
                this.removeRequest(req);
                observer.complete();
            });
            // remove request from queue when cancelled
            return () => {
                this.removeRequest(req);
                subscription.unsubscribe();
            };
        });
    }
}