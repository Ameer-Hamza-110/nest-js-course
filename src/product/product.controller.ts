import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service.js';
import { AuthGuard } from '../guards/auth/auth.guard.js';

@Controller('product')
export class ProductController {
    constructor(private readonly productSevice: ProductService) { }

    @Get()
    @UseGuards(AuthGuard)
    getProducts() {
        return this.productSevice.getAllProducts()
    }

    @Get(":id")
    getProduct(@Param("id") id: string) {
        return this.productSevice.getProductBy(Number(id))
    }
}
