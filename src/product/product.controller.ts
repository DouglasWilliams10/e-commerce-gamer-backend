import { Controller, Get } from '@nestjs/common';
import { Products, products } from 'src/core';

@Controller('products')
export class ProductController {
    @Get()
    getProducts(): Products[] {
        return products;
    }
    @Get('specifications')
    getSpecifications(): Products[] {
        return products.map((products) => ({
            ...products,
            specifications: { emphasis: products.specifications.emphasis },
        }));
    }
}

