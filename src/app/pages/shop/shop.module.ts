import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import {HeaderModule} from '../../layouts/header/header.module';
import {MobileNavModule} from '../../layouts/mobile-nav/mobile-nav.module';


@NgModule({
  declarations: [ShopComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    HeaderModule,
    MobileNavModule
  ]
})
export class ShopModule { }
