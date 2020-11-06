import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {Subscription} from 'rxjs';
import {Product} from '../../../models/product.class';


@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
    public product: Product = null;
    public subscription: Subscription;

    constructor(
            public activatedRoute: ActivatedRoute,
            public productService: ProductService,
            public routerService: Router,
    ) {
    }

    ngOnInit(): void {
        // this.handleParamsBySnapshot();
        this.handleParamsBySubscribe();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    handleParamsBySubscribe = () => {
        let id = null;
        this.subscription = this.activatedRoute.params.subscribe(data => {
            id = data.id;
            this.product = this.productService.getProductById(Number(id));
        });
    };

    handleParamsBySnapshot = () => {
        const id = Number(this.activatedRoute.snapshot.params.id);
        this.product = this.productService.getProductById(id);
    };

    BackToList = () => {
        // return this.routerService.navigate(['product/list']);
        // return this.routerService.navigate(['list'], {
        //     relativeTo: this.activatedRoute.parent
        // });
        return this.routerService.navigate(['products']);
    };
    editProduct = () => {
        // const id = Number(this.activatedRoute.snapshot.params.id);
        // return this.routerService.navigate(['edit', this.product.id], {
        //     relativeTo: this.activatedRoute.parent
        // });

        return this.routerService.navigate(['edit'], {
            relativeTo: this.activatedRoute.parent
        });

    };

    deleteProduct = () => {

    };


}
