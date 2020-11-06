import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CapitalizePipe} from './pipes/capitalize.pipe';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing.module';


@NgModule({
    declarations: [
        CapitalizePipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule
    ],
    exports: [
        CapitalizePipe,
        CommonModule,
        FormsModule,
        HttpClientModule
    ]
})
export class SharedModule {
}
