import { Component, OnInit } from '@angular/core';
import { Loc } from '../models/location';
import { LocationService } from '../services/location.service';
import { HttpInterceptor } from '../helpers/http-interceptor';
import { Injectable }    from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-location',
  templateUrl: '../views/partials/locations.html',
  providers: [LocationService, HttpInterceptor]
})

export class LocationComponent implements OnInit { 
  locations: Loc[];
  selectedLoc: Loc;
  tempLoc: Loc;
  constructor(private locationService: LocationService) { }

  getLocations(): void {
    this.locationService.getLocations().subscribe(
      (res: any)=>{this.locations = res.json() as Loc[]}
    );
  }

  add(name: string): void {
    this.tempLoc ={ID:0, Name:name, beds:[] };
    this.locationService.add(this.tempLoc).subscribe((res: any) => 
          {
            this.locations.push( res.json());
            this.selectedLoc = null;
        }
    );
  }

  delete(loc: Loc): void {
    this.locationService
        .delete(loc.ID)
        .subscribe(() => {
          this.locations = this.locations.filter(h => h !== loc);
          if (this.selectedLoc === loc) { this.selectedLoc = null; }
        });
  }

  edit(loc: Loc): void {
      this.locationService.update(loc)
          .subscribe(()=> {this.selectedLoc = null});
  }

  ngOnInit(): void {
    this.getLocations();
  }

  onSelect(loc: Loc): void {
    this.selectedLoc = loc;
  }
}