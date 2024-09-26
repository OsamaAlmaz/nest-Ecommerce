import { Controller, Post, Get, Header, Put, Delete, Body, Param, Query, NotFoundException,UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { FilterProductDTO } from './dto/filter-product.dto';
import { Roles } from 'src/auth/enums/roles.decorator';
import { Role } from 'src/auth/enums/role.enum';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/enums/roles.guard';

@Controller('store/products')
export class ProductController {
    constructor(private productService: ProductService){}
    @Get('/')
    // @Header('Cache-Control', 'none')
    async getProducts(@Query() filterProductDTO: FilterProductDTO){
        if (Object.keys(filterProductDTO).length){
            const filteredProducts = await this.productService.getFilteredProducts(filterProductDTO);
            return filteredProducts;
        }else{
            const allProducts = await this.productService.getAllProducts();
            return allProducts;
        }
    }
    @Get('/:id')
    // @Header('Cache-Control', 'none')
    async getProduct(@Param('id') id: string){
        const product = await this.productService.getProduct(id)
        if (!product) throw new NotFoundException('Product does not exist')
        return product
    }
    @Post('/')
    // @Header('Cache-Control', 'none')
    // @Roles(Role.Admin)
    // @UseGuards(JwtAuthGuard, RolesGuard)
    async addProduct(@Body() createProductDTO: CreateProductDTO){
        const product = this.productService.addProduct(createProductDTO);
        return product;
    }
    @Post("/:id")
    async updateProduct(@Param('id') id: string, @Body() createProductDTO: CreateProductDTO){

        const product  = await this.productService.updateProduct(id, createProductDTO);
        if (!product) throw new NotFoundException('Product does not exists');
        return product;
    }
    @Delete('/:id')
    async deleteProduct(@Param('id') id: string){
        const product = await this.productService.deleteProduct(id);
        if (!product) throw new NotFoundException('product not found');
        return product; 
    }
}
