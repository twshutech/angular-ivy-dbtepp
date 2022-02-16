import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders } from '@angular/common/http';
import { map, Observable, switchMap, BehaviorSubject, catchError, throwError, tap } from 'rxjs';
import { countryItem, countryCode } from '../config/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  HOST = "https://www.sitata.com/api/v2/";
  SERVICE = {
    travelRestrictions: "countries/{country_id}/travel_restrictions",
    entryRequirements: "countries/{country_id}/entry_requirements",
    profile: "users/my_profile",
    forSocket: "tokens/for_socket?for_socket=true",
    countries: "countries",
  };
  headers = new HttpHeaders().set('Authorization', 'TKN 7e814cb0-c4c3-4f00-ac69-24ce6ecad1c5');

  private country = new BehaviorSubject<string>('');
  public currentCountry: Observable<string> = this.country;

  constructor(
    private http: HttpClient
  ){}

  getCountries(): any {
    return this.http.get([this.HOST, this.SERVICE.countries].join(''), { 'headers': this.headers }).pipe(
      map(async (data:any) => data)
    )
  }

  getUrl(country: any, template:string): any  {    
    return [this.HOST, template.replace('{country_id}', country)].join('')
  }  

  selectCountry(item:string): void {
    this.country.next(item);
  }

  getTravelRestriction(countryCode: Observable<string>): any  {
    
  }  

  getEntryRequirements(countryCode: Observable<string>): any  {
    return this.currentCountry.pipe(
      catchError(async (err) => console.error(err)),
      switchMap(result=> this.http.get(this.getUrl(result, this.SERVICE.entryRequirements), { 'headers':this.headers })
        .pipe(switchMap(async(data)=> data))),
      tap(data=>{
        return data
      })
    )
  }
}