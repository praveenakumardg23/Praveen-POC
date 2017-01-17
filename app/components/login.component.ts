import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { HttpInterceptor } from '../helpers/http-interceptor';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl:'../views/partials/login.html',
  styleUrls:['../styles/css/login.css'],
  providers: [LoginService, HttpInterceptor]
})

export class LoginComponent { 
  signIn : boolean;
  errorMsg:string;
  constructor(private router: Router,private loginService: LoginService) { }

   login(uname:string, pwd:string): void {
     if(uname.length!=0 && pwd.length!=0){
        this.loginService.authenticate(uname,pwd).subscribe(
        (res: any)=>{
          if(res.json()){
            this.router.navigate(['\home', res.json().fullname, res.json().role]);
          }
          else{
            this.errorMsg = 'Username or password is invalid'
          }
      }
    );
     }
    
  }

}