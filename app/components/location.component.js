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
var location_service_1 = require('../services/location.service');
var http_interceptor_1 = require('../helpers/http-interceptor');
var LocationComponent = (function () {
    function LocationComponent(locationService) {
        this.locationService = locationService;
    }
    LocationComponent.prototype.getLocations = function () {
        var _this = this;
        this.locationService.getLocations().subscribe(function (res) { _this.locations = res.json(); });
    };
    LocationComponent.prototype.add = function (name) {
        var _this = this;
        this.tempLoc = { ID: 0, Name: name, beds: [] };
        this.locationService.add(this.tempLoc).subscribe(function (res) {
            _this.locations.push(res.json());
            _this.selectedLoc = null;
        });
    };
    LocationComponent.prototype.delete = function (loc) {
        var _this = this;
        this.locationService
            .delete(loc.ID)
            .subscribe(function () {
            _this.locations = _this.locations.filter(function (h) { return h !== loc; });
            if (_this.selectedLoc === loc) {
                _this.selectedLoc = null;
            }
        });
    };
    LocationComponent.prototype.edit = function (loc) {
        var _this = this;
        this.locationService.update(loc)
            .subscribe(function () { _this.selectedLoc = null; });
    };
    LocationComponent.prototype.ngOnInit = function () {
        this.getLocations();
    };
    LocationComponent.prototype.onSelect = function (loc) {
        this.selectedLoc = loc;
    };
    LocationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-location',
            templateUrl: '../views/partials/locations.html',
            providers: [location_service_1.LocationService, http_interceptor_1.HttpInterceptor]
        }), 
        __metadata('design:paramtypes', [location_service_1.LocationService])
    ], LocationComponent);
    return LocationComponent;
}());
exports.LocationComponent = LocationComponent;
//# sourceMappingURL=location.component.js.map