
import {AuthGuard} from '../services/guards/auth.guard';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';
import {ProductEditComponent} from './components/product-edit/product-edit.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {Routes} from '@angular/router';
import {ProductsComponent} from './components/products/products.component';

export const productRoutes: Routes = [
    // {
    //     path: 'product',
    //     component: ProductsComponent,
    //     children: [
    //         {
    //             path : '',
    //             redirectTo : 'list',
    //             pathMatch : 'full'
    //         },
    //         {
    //             path : 'list',
    //             component: ProductListComponent
    //         },
    //         {
    //             path : ':id',
    //             component : ProductDetailComponent
    //         },
    //         {
    //             path : 'edit/:id',
    //             component: ProductEditComponent
    //         },
    //     ]
    // },
    {
        path: 'product/:id',
        component: ProductsComponent,
        canActivate : [AuthGuard],
        children: [
            {
                path: '',
                component: ProductDetailComponent
            },
            {
                path: 'edit',
                component: ProductEditComponent
            },
        ]
    },
    {
        path: 'products',
        component: ProductListComponent,
        canActivate : [AuthGuard],
    },
];
