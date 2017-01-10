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
var http_interceptor_1 = require('../helpers/http-interceptor');
require('rxjs/add/operator/toPromise');
var LocationService = (function () {
    function LocationService(httpInt) {
        this.heroesUrl = 'http://localhost:52063/api/locations'; // URL to web api
        this.http = httpInt;
    }
    LocationService.prototype.getLocations = function () {
        return this.http.get(this.heroesUrl);
    };
    LocationService.prototype.add = function (loc) {
        return this.http
            .post(this.heroesUrl, loc);
    };
    LocationService.prototype.delete = function (id) {
        var url = this.heroesUrl + "/" + id;
        return this.http.delete(url);
    };
    LocationService.prototype.update = function (loc) {
        var url = this.heroesUrl + "/" + loc.ID;
        return this.http
            .put(url, JSON.stringify(loc));
    };
    LocationService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    LocationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_interceptor_1.HttpInterceptor])
    ], LocationService);
    return LocationService;
}());
exports.LocationService = LocationService;
//# sourceMappingURL=location.service.js.map