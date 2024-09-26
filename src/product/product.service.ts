import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './product.schema';
import { FilterProductDTO } from './dto/filter-product.dto';
import { CreateProductDTO } from './dto/create-product.dto';


@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private readonly productModel: Model<Product>){}

    // find all products
    async getAllProducts(): Promise<Product []> {
        const products = await this.productModel.find().limit(10).exec();
        return products;
    }
    async getProduct (id: string): Promise<Product> {
        const Product = await this.productModel.findById(id).exec()
        return Product
    }

    async addProduct(createProductDTO: CreateProductDTO): Promise<Product>{
        // const newProduct =  await this.productModel.create(createProductDTO);
        const newProduct = new this.productModel(createProductDTO)
        return newProduct.save();
    }

    async updateProduct(id: string, createProductDTO: CreateProductDTO): Promise<Product>{
        const updatedProduct = await this.productModel.findByIdAndUpdate(id, createProductDTO, {new: true});
        return updatedProduct;
    }

    async deleteProduct (id: string): Promise<any>{
        const deleteProduct = await this.productModel.findByIdAndDelete(id);
        return deleteProduct;
    }

    async getFilteredProducts(filterProductDTO: FilterProductDTO): Promise<Product[]> {
        const { category, search } = filterProductDTO;
        let products = await this.getAllProducts();
    
        if (search) {
          products = products.filter(product => 
            product.title.includes(search) ||
            product.description.includes(search)
          );
        }
    
        if (category) {
          products = products.filter(product => product.category === category)
        }
    
        return products;
      }

}
