import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileNavComponent } from './mobile-nav.component';



@NgModule({
    declarations: [MobileNavComponent],
    exports: [
        MobileNavComponent
    ],
    imports: [
        CommonModule
    ]
})
export class MobileNavModule { }
