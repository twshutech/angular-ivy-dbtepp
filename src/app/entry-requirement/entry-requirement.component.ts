import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ConfigService } from '../config/config-service';
import { countryItem, countryCode, entry_rules } from '../config/interfaces';

@Component({
  selector: 'app-entry-requirement',
  templateUrl: './entry-requirement.component.html',
  styleUrls: ['../../assets/css/github-markdown.css', './entry-requirement.component.css'],
})
export class EntryRequirementComponent implements OnInit, OnDestroy {
  currentCountryCode: Observable<string> = this.configService.currentCountry;
  SelectedCountryItem = this.configService.currentCountry;
  list$: Observable<any> = this.configService.getEntryRequirements(this.currentCountryCode);

  constructor(
    private configService: ConfigService,
    // private subscription: Subscription
    ) { }

  ngOnInit()  {
    // this.subscription = this.configService.currentCountry.subscribe(item=> this.countryCode = item);
  }

  ngOnDestroy(): void {
      // this.subscription.unsubscribe();
  }

  countryCodeHandler(countryItem:any): any{
    this.currentCountryCode = this.configService.currentCountry;
    countryItem.subscribe((data: any)=>{
      if(data.length !== 0){
        this.list$ = this.configService.getEntryRequirements(data);
      }
    });
  }
}