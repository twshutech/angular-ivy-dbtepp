import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbdDropdownBasic } from '../dropdown-basic/dropdown-basic';
import { NgbdDropdownBasicModule } from '../dropdown-basic/dropdown-basic.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbdDropdownBasicModule,
    // RouterModule.forRoot([
    //   { path: '', component: NgbdDropdownBasic}
    // ])
  ],
  schemas:  [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class TopBarModule { }
