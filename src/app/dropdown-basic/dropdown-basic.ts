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
  @Output() newItemEvent = new EventEmitter<countryCode>();
  subscription: any;
  object: {[key: number]: string} = {2: 'foo', 1: 'bar'};
  map = new Map([[2, 'foo'], [1, 'bar'], [5, '1ar']]);

  constructor(
    private configService: ConfigService
  ){}

  ngOnInit(): void {
    this.subscription = this.contriesList$.pipe().subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  selectCountry(countryItem: any): void{
    this.newItemEvent.emit(countryItem);
    this.selectedCountryCode = countryItem?.name;
    this.configService.selectCountry(countryItem?.country_code);
    function  f(){
      return countryItem;
    }
    type p = ReturnType<typeof f>
  }

  isActive(countryItem: countryItem): any{
    if (this.selectedCountryCode === countryItem.name){
      return "dropdown-item-active"
    }
    else  {
      return ''
    }
  }
}
