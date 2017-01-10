/*
import { LocationComponent } from '../../components/location.component';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, BaseRequestOptions,XHRBackend, Response, ResponseOptions } from '@angular/http';
import { LocationService } from '../../services/location.service';
import { HttpInterceptor } from '../../helpers/http-interceptor';
import {Observable} from 'rxjs/Observable';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Loc } from '../../models/location';

describe('LocationComponent', function () {
  let comp: LocationComponent;
  let fixture: ComponentFixture<LocationComponent>;
  let locationServiceStub: LocationService;
  let def: any;
  let mockBackend: MockBackend;

  beforeEach(async(() => {
    locationServiceStub = {
       getLocations  : ()=>{},
       update:()=>{},
       delete:()=>{},
       add:()=>{}
    };
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpModule ],
      declarations: [ LocationComponent ],
      providers:[ MockBackend,
        {
            provide: LocationService,
            useValue: locationServiceStub
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationComponent);
    comp = fixture.componentInstance;

  });


  it('should create component', () => expect(comp).toBeDefined() );

  it('should get location', inject([ MockBackend, LocationService], (mockBackend: MockBackend, service: LocationService) => {

      service.getLocations().subscribe((location:any)=>{
          console.log(location);
          expect(location.length).toBe(1);
      }
      );
  } ));
});
*/ 
//# sourceMappingURL=location.component.spec.js.map