import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    private products = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 },
    ];
    getAllProducts(){
        return this.products; //this keyword is used to refer to the current instance of the class. In this case, it is used to access the products property of the ProductService class.
    }

    getProductBy(id: number){
        return this.products.find((p)=> p.id === id); //this keyword is used to refer to the current instance of the class. In this case, it is used to access the products property of the ProductService class.
    }
}
