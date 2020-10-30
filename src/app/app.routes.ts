import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {ProductsComponent} from './components/products/products.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';

export const appRoutes: Routes = [
    // {
    //     path: '',
    //     redirectTo : '/index',
    //     pathMatch : 'full'
    // },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'index',
        component: HomeComponent
    },
    {
        path: 'product',
        component: ProductsComponent
    },
    {
        path: 'product/:id',
        component: ProductDetailComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
