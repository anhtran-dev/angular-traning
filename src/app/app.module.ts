import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DataBindingComponentToViewComponent } from './components/data-binding-component-to-view/data-binding-component-to-view.component';
import { EventBindingViewToComponentComponent } from './components/event-binding-view-to-component/event-binding-view-to-component.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import {FormsModule} from '@angular/forms';
import { StructuralDirectiveComponent } from './components/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './components/attribute-directive/attribute-directive.component';
import { ComponentInteractionChildComponent } from './components/component-interaction-child/component-interaction-child.component';
import { ComponentInteractionParentComponent } from './components/component-interaction-parent/component-interaction-parent.component';
import { PipeComponent } from './components/pipe/pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DataBindingComponentToViewComponent,
    EventBindingViewToComponentComponent,
    TwoWayBindingComponent,
    StructuralDirectiveComponent,
    AttributeDirectiveComponent,
    ComponentInteractionChildComponent,
    ComponentInteractionParentComponent,
    PipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
