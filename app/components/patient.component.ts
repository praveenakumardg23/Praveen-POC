import { Component } from '@angular/core';
import {GridOptions} from 'ag-grid/main';
import { PatientService } from '../services/patient.service';
import { Patient } from '../models/patient';
import { HttpInterceptor } from '../helpers/http-interceptor';

@Component({
  moduleId: module.id,
  selector: 'patient',
  templateUrl: '../views/partials/patient.html',
  providers: [PatientService, HttpInterceptor]
})


export class PatientComponent { 
  private gridOptions:GridOptions;
   public showGrid:boolean;
    public rowData:any[];
    private columnDefs:any[];
    public rowCount:string;

   constructor(private patientService: PatientService) {
        // we pass an empty gridOptions in, so we can grab the api out
        this.gridOptions = <GridOptions>{};
        this.createRowData();
        this.createColumnDefs();
        this.showGrid = true;
    }

    private createRowData() {
        this.patientService.getAllPatients().subscribe(
          (res: any)=>{this.rowData =  res.json() as Patient[]}
        );
    }

    private createColumnDefs() {
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
    }
}

function actionCellRenderer(params:any) {
  return '<button>Edit</button>&nbsp;&nbsp;<button>Delete</button>'
};