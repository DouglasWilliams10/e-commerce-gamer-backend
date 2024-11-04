import { Controller, Get, Param } from '@nestjs/common';
// import { resolve } from 'path';
import { Product, products } from 'src/core';

@Controller('product')
export class ProductController {
    @Get()
    async getProducts(): Promise<Product[]> {
        // await this.esperarSegundos(2); // Chamada aqui a função que faz esperar 2 segundos antes de renderizar a função
        return products;
    }
    @Get('specifications')
    getSpecifications(): Product[] {
        return products.map((products) => ({
            ...products,
            specifications: { emphasis: products.specifications.emphasis },
        }));
    }
    @Get(':id')
    async getProductId(@Param('id') id:string): Promise<Product | null> {
        const product = products.find((product) => product.id === +id);
        return product ?? null;
    }

    // Função que faz esperar segundos antes de renderizar a lista de produtos.
    // esperarSegundos(segundos: number): Promise<void> {
    //     return new Promise((resolve) => {
    //         setTimeout(resolve, segundos * 1000)
    //     })
    // }
}

