import { Injectable }    from '@angular/core';
import { HttpInterceptor } from '../helpers/http-interceptor';
import {Observable} from 'rxjs/Observable';
import { UserRegister } from '../models/login';



@Injectable()
export class UserRegisterService {

    private url = 'http://localhost:52063/api/login';  // URL to web api
    private http: HttpInterceptor;
    
    constructor(httpInt: HttpInterceptor){
        this.http=httpInt;
    }

    add(user: UserRegister): any {
     return this.http
            .post(this.url, user);
    }

}