import { Injectable }    from '@angular/core';
import { HttpInterceptor } from '../helpers/http-interceptor';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

import { Loc } from '../models/location';

@Injectable()
export class LocationService {

    private heroesUrl = 'http://localhost:52063/api/locations';  // URL to web api
    private http: HttpInterceptor;
    
    constructor(httpInt: HttpInterceptor){
        this.http=httpInt;
    }

    getLocations():any{
        return this.http.get(this.heroesUrl);
    }

    add(loc: Loc): any {
     return this.http
            .post(this.heroesUrl, loc);
    }

    delete(id: number): any {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url);
    }

    update(loc: Loc): any {
        const url = `${this.heroesUrl}/${loc.ID}`;
        return this.http
            .put(url, JSON.stringify(loc));
    }
	
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}