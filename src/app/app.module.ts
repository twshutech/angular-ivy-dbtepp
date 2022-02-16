import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { NgbdDropdownBasicModule } from '../app/dropdown-basic/dropdown-basic.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { EntryRequirementComponent } from './entry-requirement/entry-requirement.component';
import { TravelRestrictionComponent } from './travel-restriction/travel-restriction.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbdDropdownBasicModule,
    MarkdownModule.forRoot(),
    RouterModule.forRoot([
      { path: 'entry-requirement', component: EntryRequirementComponent },
      { path: 'travel-restriction', component: TravelRestrictionComponent}
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    EntryRequirementComponent,
    TravelRestrictionComponent
  ],
  bootstrap: [
    AppComponent
  ],
  // schemas:  [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }