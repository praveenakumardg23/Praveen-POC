"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var app_component_1 = require('./components/app.component');
var app_routing_module_1 = require('./helpers/app-routing.module');
var assign_patient_component_1 = require('./components/assign-patient.component');
var patient_component_1 = require('./components/patient.component');
var location_component_1 = require('./components/location.component');
var login_component_1 = require('./components/login.component');
var register_component_1 = require('./components/register.component');
var home_component_1 = require('./components/home.component');
var main_1 = require('ag-grid-ng2/main');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule, main_1.AgGridModule.withComponents([patient_component_1.PatientComponent])],
            declarations: [app_component_1.AppComponent, assign_patient_component_1.AssignPatientComponent, patient_component_1.PatientComponent, location_component_1.LocationComponent, login_component_1.LoginComponent, register_component_1.RegisterComponent, home_component_1.HomeComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map