import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import {RouterModule} from '@angular/router';
import {FooterModule} from '../footer/footer.module';



@NgModule({
    declarations: [MainComponent],
    exports: [
        MainComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FooterModule
    ]
})
export class MainModule { }
