import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsComponent } from './product-details.component';
import {MobileNavModule} from '../../layouts/mobile-nav/mobile-nav.module';
import {HeaderModule} from '../../layouts/header/header.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [
    CommonModule,
    ProductDetailsRoutingModule,
    MobileNavModule,
    HeaderModule,
    FormsModule
  ]
})
export class ProductDetailsModule { }
