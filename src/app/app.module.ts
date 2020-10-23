import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DataBindingComponentToViewComponent } from './components/data-binding-component-to-view/data-binding-component-to-view.component';
import { EventBindingViewToComponentComponent } from './components/event-binding-view-to-component/event-binding-view-to-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DataBindingComponentToViewComponent,
    EventBindingViewToComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
