import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Category{
    @Prop({required: true, index: true})
    title: string;
    @Prop({required: true})
    description: string;
    @Prop({required: true})
    img: string; 
}

export const CategorySchema = SchemaFactory.createForClass(Category);
export type CategoryDocument = Category & Document
