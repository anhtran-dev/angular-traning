import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../models/product.class';
import {ProductService} from '../../services/product.service';
import {Subscription} from 'rxjs';


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
            public productService: ProductService
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
    }

    handleParamsBySnapshot = () => {
        const id = Number(this.activatedRoute.snapshot.params.id);
        this.product = this.productService.getProductById(id);
    }



}
