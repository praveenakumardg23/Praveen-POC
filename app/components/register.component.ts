import { Component } from '@angular/core';
import { UserRegisterService } from '../services/user-register.service';
import { HttpInterceptor } from '../helpers/http-interceptor';
import { UserRegister } from '../models/login';

@Component({
  moduleId: module.id,
  selector: 'user-register',
  templateUrl:'../views/partials/register.html',
  styleUrls:['../styles/css/login.css'],
  providers: [UserRegisterService, HttpInterceptor]
})

export class RegisterComponent { 

  tempUser:UserRegister= {
    userid:'',
    fullname: '',
    password:'',
    role:''
  };

  successMsg:boolean=false;
  errorMsg:boolean=false;

  password: string;

  constructor(private registerService: UserRegisterService) { 
  }

  addUser(): void{
    this.registerService.add(this.tempUser).subscribe((res: any) => 
          {
            this.successMsg =true;
        }
    );
  }
  
}