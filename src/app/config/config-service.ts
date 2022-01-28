import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders } from '@angular/common/http';
import { map, Observable, switchMap, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  HOST = "https://www.sitata.com/api/v2/";
  SERVICE = {
    auTravelRestrictions: "countries/AU/travel_restrictions",
    profile: "users/my_profile",
    forSocket: "tokens/for_socket?for_socket=true",
    entryRequirements: "entry_requirements?departure=TW&destination=",
    countries: "countries"
  };
  headers = new HttpHeaders()
    .set('Authorization', 'TKN 7e814cb0-c4c3-4f00-ac69-24ce6ecad1c5');

  private country = new BehaviorSubject('');
  currentCountry = this.country.asObservable();

  constructor(
    private http: HttpClient
  ){}

  getCountries(): any {
    return this.http.get([this.HOST, this.SERVICE.countries].join(''), { 'headers': this.headers }).pipe(
      map(async (data:any) => data)
    )
  }

  selectCountry(item:string): void {
    this.country.next(item);
  }

  getTravelRestriction(countryCode: string): any  {
    if (countryCode.length === 0)
      return
    const headers = new HttpHeaders().set('Authorization', 'TKN 7e814cb0-c4c3-4f00-ac69-24ce6ecad1c5');
    return this.http.get([this.HOST, this.SERVICE.entryRequirements, countryCode].join(''), { headers }).pipe(
      switchMap(async (data) => data)
    )
  }
}