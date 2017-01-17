import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssignPatientComponent }   from '../components/assign-patient.component';
import { PatientComponent }      from '../components/patient.component';
import { LocationComponent }  from '../components/location.component';
import { LoginComponent }  from '../components/login.component';
import { RegisterComponent }  from '../components/register.component';
import { HomeComponent }  from '../components/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  //{ path: 'register', component: RegisterComponent },
  { path: 'home/:username/:role', component: HomeComponent,
    children: [
     // { path: '', redirectTo: 'assign-patient', pathMatch: 'full' }
      { path: 'user-register',  component: RegisterComponent },
   //   { path: 'patient', component: PatientComponent },
  //    { path: 'location', component: LocationComponent },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}