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
var user_register_service_1 = require('../services/user-register.service');
var http_interceptor_1 = require('../helpers/http-interceptor');
var RegisterComponent = (function () {
    function RegisterComponent(registerService) {
        this.registerService = registerService;
        this.tempUser = {
            userid: '',
            fullname: '',
            password: '',
            role: ''
        };
        this.successMsg = false;
        this.errorMsg = false;
    }
    RegisterComponent.prototype.addUser = function () {
        var _this = this;
        this.registerService.add(this.tempUser).subscribe(function (res) {
            _this.successMsg = true;
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user-register',
            templateUrl: '../views/partials/register.html',
            styleUrls: ['../styles/css/login.css'],
            providers: [user_register_service_1.UserRegisterService, http_interceptor_1.HttpInterceptor]
        }), 
        __metadata('design:paramtypes', [user_register_service_1.UserRegisterService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map