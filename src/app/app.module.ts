import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {DataBindingComponentToViewComponent} from './components/data-binding-component-to-view/data-binding-component-to-view.component';
import {EventBindingViewToComponentComponent} from './components/event-binding-view-to-component/event-binding-view-to-component.component';
import {TwoWayBindingComponent} from './components/two-way-binding/two-way-binding.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StructuralDirectiveComponent} from './components/structural-directive/structural-directive.component';
import {AttributeDirectiveComponent} from './components/attribute-directive/attribute-directive.component';
import {ComponentInteractionChildComponent} from './components/component-interaction-child/component-interaction-child.component';
import {ComponentInteractionParentComponent} from './components/component-interaction-parent/component-interaction-parent.component';
import {PipeComponent} from './components/pipe/pipe.component';
import {FormatDataPipe} from './pipes/format-data.pipe';
import {FilterDataPipe} from './pipes/filter-data.pipe';
import {SortArrayNumberPipe} from './pipes/sort-array-number.pipe';
import {SortDataPipe} from './pipes/sort-data.pipe';
import {TemplateReferenceComponent} from './components/template-reference/template-reference.component';
import {LifecycleHooksComponent} from './components/lifecycle-hooks/lifecycle-hooks.component';
import {OtherLifecycleHooksComponent} from './components/other-lifecycle-hooks/other-lifecycle-hooks.component';
import {DemoServiceFirstComponent} from './components/services/demo-service-first/demo-service-first.component';
import {DemoSerivceSecondComponent} from './components/services/demo-serivce-second/demo-serivce-second.component';
import {ServiceComponentComponent} from './components/services/service-component/service-component.component';
import {LoggingService} from './services/logging.service';
import {MovieListComponent} from './components/movies/movie-list/movie-list.component';
import {MovieAddComponent} from './components/movies/movie-add/movie-add.component';
import {MovieComponent} from './components/movies/movie/movie.component';
import {MovieService} from './services/movie.service';
import {RouterComponent} from './components/router/router.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {HomeComponent} from './components/home/home.component';
import {AuthGuard} from './services/guards/auth.guard';
import {ProductManagementModule} from './product-management/product-management.module';
import {HttpClientComponent} from './components/http-client/http-client.component';
import {TodoModule} from './todo/todo.module';
import {JsonServeComponent} from './components/json-serve/json-serve.component';
import {CoursesManagementModule} from './courses-management/courses-management.module';
import {FormComponent} from './components/form/form.component';
import {ReactiveFormComponent} from './components/reactive-form/reactive-form.component';
import {CustomValidationComponent} from './components/custom-validation/custom-validation.component';


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
        FormatDataPipe,
        FilterDataPipe,
        SortArrayNumberPipe,
        SortDataPipe,
        TemplateReferenceComponent,
        LifecycleHooksComponent,
        OtherLifecycleHooksComponent,
        DemoServiceFirstComponent,
        DemoSerivceSecondComponent,
        ServiceComponentComponent,
        MovieListComponent,
        MovieAddComponent,
        MovieComponent,
        RouterComponent,
        HeaderComponent,
        FooterComponent,
        AboutComponent,
        ContactComponent,
        NotFoundComponent,
        HomeComponent,
        HttpClientComponent,
        JsonServeComponent,
        FormComponent,
        ReactiveFormComponent,
        CustomValidationComponent,
    ],
    imports: [
        BrowserModule,
        ProductManagementModule,
        CoursesManagementModule,
        TodoModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    providers: [
        LoggingService,
        MovieService,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
