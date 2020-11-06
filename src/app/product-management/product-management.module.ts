import {NgModule} from '@angular/core';
import {ProductsComponent} from './components/products/products.component';
import {ProductEditComponent} from './components/product-edit/product-edit.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';
import {ProductService} from './services/product.service';
import {AppRoutingModule} from '../app-routing.module';
import {RouterModule} from '@angular/router';
import {productRoutes} from './product-management.routes';
import {SharedModule} from '../shared/shared.module';


@NgModule({
    declarations: [
        ProductsComponent,
        ProductEditComponent,
        ProductListComponent,
        ProductDetailComponent,
    ],
    imports: [
        SharedModule,
        AppRoutingModule,
        RouterModule.forChild(productRoutes)
    ],
    providers: [
        ProductService,
    ],
})
export class ProductManagementModule {
}
