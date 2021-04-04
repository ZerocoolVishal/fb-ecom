import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import {MobileNavModule} from '../../layouts/mobile-nav/mobile-nav.module';
import {HeaderModule} from '../../layouts/header/header.module';


@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    MobileNavModule,
    HeaderModule
  ]
})
export class CartModule { }
