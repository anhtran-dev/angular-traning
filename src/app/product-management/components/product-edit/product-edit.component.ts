import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {Subscription} from 'rxjs';
import {Product} from '../../../models/product.class';

@Component({
    selector: 'app-product-edit',
    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, OnDestroy {
    public product: Product;
    public name: string;
    public price: number;
    public status: boolean;
    public subscription: Subscription = null;
    constructor(
            public productService: ProductService,
            public routerService: Router,
            public activatedRoute: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        // ---- C1
        this.handleParams();
        // ---- C2
        // const id = Number(this.activatedRoute.snapshot.params.id);
        // this.product = this.productService.getProductById(id);
        // this.name = this.product.name;
        // this.price = this.product.price;
        // this.status = this.product.status;
    }
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    handleParams = () => {
        // return  Number(this.activatedRoute.snapshot.params.id);
        let id = null;
        // this.subscription = this.activatedRoute.params.subscribe(data => {
        //     id = data.id;
        //     this.product = this.productService.getProductById(Number(id));
        //     this.name = this.product.name;
        //     this.price = this.product.price;
        //     this.status = this.product.status;
        // });

        this.subscription = this.activatedRoute.parent.params.subscribe(params => {
                id = params.id;
                this.product = this.productService.getProductById(Number(id));
                this.name = this.product.name;
                this.price = this.product.price;
                this.status = this.product.status;
        });
    };

    updateProduct = () => {
        this.productService.updateProduct(this.product.id);
    };

}
