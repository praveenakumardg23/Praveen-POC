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
var patient_service_1 = require('../services/patient.service');
var http_interceptor_1 = require('../helpers/http-interceptor');
var PatientComponent = (function () {
    function PatientComponent(patientService) {
        this.patientService = patientService;
        // we pass an empty gridOptions in, so we can grab the api out
        this.gridOptions = {};
        this.createRowData();
        this.createColumnDefs();
        this.showGrid = true;
    }
    PatientComponent.prototype.createRowData = function () {
        var _this = this;
        this.patientService.getAllPatients().subscribe(function (res) { _this.rowData = res.json(); });
    };
    PatientComponent.prototype.createColumnDefs = function () {
        this.columnDefs = [
            {
                headerName: '#',
                width: 30,
                checkboxSelection: true,
                suppressSorting: true,
                suppressMenu: true,
                pinned: true
            },
            {
                headerName: 'FirstName',
                width: 150,
                field: 'firstName',
                filter: 'text'
            },
            {
                headerName: 'LastName',
                width: 150,
                field: 'lastName',
                filter: 'text'
            },
            {
                headerName: 'DOB',
                width: 150,
                field: 'dob',
                filter: 'text'
            },
            {
                headerName: 'Address',
                width: 150,
                field: 'address',
                filter: 'text'
            },
            {
                headerName: 'MobileNo',
                width: 150,
                field: 'mobileNo',
                filter: 'text'
            },
            {
                headerName: 'EmailID',
                width: 150,
                field: 'emailId',
                filter: 'text'
            },
            {
                headerName: 'AdmitDate',
                width: 150,
                field: 'admitDate',
                filter: 'text'
            },
            {
                headerName: 'Actions',
                width: 150,
                cellRenderer: actionCellRenderer
            }
        ];
    };
    PatientComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'patient',
            templateUrl: '../views/partials/patient.html',
            providers: [patient_service_1.PatientService, http_interceptor_1.HttpInterceptor]
        }), 
        __metadata('design:paramtypes', [patient_service_1.PatientService])
    ], PatientComponent);
    return PatientComponent;
}());
exports.PatientComponent = PatientComponent;
function actionCellRenderer(params) {
    return '<button>Edit</button>&nbsp;&nbsp;<button>Delete</button>';
}
;
//# sourceMappingURL=patient.component.js.map