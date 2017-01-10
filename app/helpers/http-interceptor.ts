import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class HttpInterceptor {

  constructor(private http: Http) {}

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('username:password')); 
  }

  get(url:string) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url: string, data: any) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  }

  delete(url: string) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.delete(url, {
      headers: headers
    });
  }

  put(url: string, data: any) {
    let headers = new Headers({'Content-Type': 'application/json'});
    return this.http.put(url, data, {
      headers: headers
    });
  }
}