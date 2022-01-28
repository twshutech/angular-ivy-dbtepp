import {Component, OnDestroy, OnInit, Output, EventEmitter} from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../config/config-service';
import { countryItem, countryCode } from '../config/interfaces';

@Component({
  selector: 'ngbd-dropdown-basic',
  templateUrl: './dropdown-basic.html',
  styleUrls: ['./dropdown-basic.css']
})
export class NgbdDropdownBasic implements OnInit, OnDestroy {
  contriesList$: Observable<any> = this.configService.getCountries();
  selectedCountryCode: string = 'Select destination country';
  newItemEvent = new EventEmitter<countryCode>(false);

  constructor(
    private configService: ConfigService
  ){}

  ngOnInit(): void {
    this.contriesList$.pipe()
      .subscribe(data =>  {
        console.log(data);
      });
  }

  ngOnDestroy(): void {

  }

  selectCountry(countryItem: countryItem): void{
    this.newItemEvent.emit();
    this.selectedCountryCode = countryItem?.name;
    this.configService.selectCountry(countryItem?.country_code);
    console.log(countryItem);
  }
}
