import { Controller, Get } from '@nestjs/common';
import { resolve } from 'path';
import { Products, products } from 'src/core';

@Controller('products')
export class ProductController {
    @Get()
    async getProducts(): Promise<Products[]> {
        // await this.esperarSegundos(2); // Chamada aqui a função que faz esperar 2 segundos antes de renderizar a função
        return products;
    }
    @Get('specifications')
    getSpecifications(): Products[] {
        return products.map((products) => ({
            ...products,
            specifications: { emphasis: products.specifications.emphasis },
        }));
    }

    // Função que faz esperar segundos antes de renderizar a lista de produtos.
    // esperarSegundos(segundos: number): Promise<void> {
    //     return new Promise((resolve) => {
    //         setTimeout(resolve, segundos * 1000)
    //     })
    // }
}

