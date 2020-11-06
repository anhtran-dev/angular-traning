import {Injectable} from '@angular/core';
import {Product} from '../../models/product.class';


@Injectable({
    providedIn: 'root'
})
export class ProductService {
    public products = [
        new Product(1, 'Technician', 44790, true),
        new Product(2, 'Orchestrator', 97359, true),
        new Product(3, 'Developer', 71600, false),
        new Product(4, 'Producer', 41030, true),
    ];

    constructor() {
    }

    getListProducts = (name?: string, price?: number) => {
        let result: Product[] = this.products;
        if (name) {
            result = this.products.filter(item => {
                return item.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
            });
        }
        if (price){
            result = this.products.filter(item => {
                return item.price === Number(price);
            });
        }
        return result;
    };

    getProductById = (id) => {
        let result = null;
        if (this.products.length > 0) {
            this.products.map(item => {
                if (item.id === id) {
                    result = item;
                }
            });
        }
        return result;
    };

    updateProduct = (id) => {
        console.log(id);
    }
}
