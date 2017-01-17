import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'my-home',
  templateUrl:'../views/shared/home-layout.html',
  styleUrls:['../styles/css/simple-sidebar.css']
})

export class HomeComponent implements OnInit { 
 sidebar: boolean;
 userName:string;
 userRole: string;
 constructor(private route: ActivatedRoute, private router: Router) { this.sidebar=false; }
 ngOnInit() {
  this.userName = this.route.params.value['username']
  this.userRole = this.route.params.value['role']
 }

 signOut(): void{
    this.router.navigate(['login']);
 }
}