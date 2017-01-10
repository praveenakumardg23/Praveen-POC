import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions,Http } from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent }  from './components/app.component';
import { AppRoutingModule } from './helpers/app-routing.module';
import { AssignPatientComponent }   from './components/assign-patient.component';
import { PatientComponent }      from './components/patient.component';
import { LocationComponent }  from './components/location.component';
import { LoginComponent }  from './components/login.component';
import { RegisterComponent }  from './components/register.component';
import { HomeComponent }  from './components/home.component';
import {AgGridModule} from 'ag-grid-ng2/main';


@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, FormsModule,HttpModule,RouterModule, AgGridModule.withComponents([PatientComponent]) ],
  declarations: [ AppComponent, AssignPatientComponent, PatientComponent, LocationComponent, LoginComponent, RegisterComponent,HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
