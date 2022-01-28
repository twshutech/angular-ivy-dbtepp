import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ConfigService } from '../config/config-service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  countryCode: string = '';
  list$: Observable<any> = this.configService.getTravelRestriction(this.countryCode);

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

  share() {
    window.alert('The product has been shared!');
  }
}