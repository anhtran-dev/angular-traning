import {Injectable} from '@angular/core';
import {Product} from '../models/product.class';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    public products = [
        new Product(1, 'LOL', 4234, true),
        new Product(1, 'LOL', 4234, true),
    ];

    constructor() {
    }

    getListProducts = () => {
        return this.products;
    };

    getProductById = (id) => {
        if (this.products.length > 0) {
            return this.products.filter(item => item.id === id);
        } else {
            return null;
        }
    }
}
