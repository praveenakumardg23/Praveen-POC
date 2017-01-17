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
var login_service_1 = require('../services/login.service');
var http_interceptor_1 = require('../helpers/http-interceptor');
var router_1 = require('@angular/router');
var LoginComponent = (function () {
    function LoginComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    LoginComponent.prototype.login = function (uname, pwd) {
        var _this = this;
        if (uname.length != 0 && pwd.length != 0) {
            this.loginService.authenticate(uname, pwd).subscribe(function (res) {
                if (res.json()) {
                    _this.router.navigate(['\home', res.json().fullname, res.json().role]);
                }
                else {
                    _this.errorMsg = 'Username or password is invalid';
                }
            });
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-login',
            templateUrl: '../views/partials/login.html',
            styleUrls: ['../styles/css/login.css'],
            providers: [login_service_1.LoginService, http_interceptor_1.HttpInterceptor]
        }), 
        __metadata('design:paramtypes', [router_1.Router, login_service_1.LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map