import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './services/guards/auth.guard';
import {FormComponent} from './components/form/form.component';

export const appRoutes: Routes = [
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
        path: 'form',
        component: FormComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
