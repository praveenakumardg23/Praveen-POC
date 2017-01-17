import { Injectable }    from '@angular/core';
import { HttpInterceptor } from '../helpers/http-interceptor';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

    private url = 'http://localhost:52063/api/login';  // URL to web api
    private http: HttpInterceptor;
    
    constructor(httpInt: HttpInterceptor){
        this.http=httpInt;
    }

    authenticate(uname:string, pwd:string):any{
        const url = `${this.url}?userid=${uname}&password=${pwd}`;
        return this.http.get(url);
    }

}