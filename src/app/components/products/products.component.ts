import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../models/product.class';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
    products: Product[] = [];
    public name: string;
    public price: number;
    public subscription: Subscription;
    constructor(
            private productService: ProductService,
            public routerService: Router,
            public activatedRoute: ActivatedRoute,

    ) {
    }

    ngOnInit(): void {
        this.products = this.productService.getListProducts();
        this.subscription = this.activatedRoute.queryParams.subscribe(data => {
            this.name = data.name;
            this.price = data.price;
            this.products = this.productService.getListProducts(this.name, this.price);
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    searchProduct = () => {
        console.log(1);
    };

    onSearchProduct = () => {
        return this.routerService.navigate(['product'], {
            queryParams: {
                name: this.name ? this.name : '',
                price: this.price ? this.price : ''
            }
        });
    };

}
