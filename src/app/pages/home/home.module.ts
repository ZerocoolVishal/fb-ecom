import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {MobileNavModule} from '../../layouts/mobile-nav/mobile-nav.module';
import {HeaderModule} from '../../layouts/header/header.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MobileNavModule,
    HeaderModule
  ]
})
export class HomeModule { }
