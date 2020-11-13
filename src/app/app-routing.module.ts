import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {AuthGuard} from './services/guards/auth.guard';
import {ContactComponent} from './components/contact/contact.component';
import {FormComponent} from './components/form/form.component';
import {ReactiveFormComponent} from './components/reactive-form/reactive-form.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

const appRoutes: Routes = [
    // {
    //     path: '',
    //     redirectTo : '/index',
    //     pathMatch : 'full'
    // },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'index',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent,
        canDeactivate : [AuthGuard]
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'template-form',
        component: FormComponent
    },
    {
        path: 'data-form',
        component: ReactiveFormComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
