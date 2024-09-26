import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product{
    @Prop()
    title: string;
    @Prop()
    description: string;
    @Prop()
    price: number;
    @Prop()
    category: string;
    @Prop()
    image1: string;
    @Prop()
    isNewProduct: boolean;
    @Prop()
    oldPrice: number;
    @Prop()
    newPrice:number;
    @Prop()
    category_id: string;

}
export const ProductSchema = SchemaFactory.createForClass(Product);
export type ProductDocument = Product & Document;
