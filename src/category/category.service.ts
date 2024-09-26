import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryDocument } from './category.schema';
import { Model } from 'mongoose';
import { CategoryDTO } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
    constructor(
        @InjectModel('Category') private readonly categoryModel: Model<CategoryDocument>
    ){}
    
    async getAllCategories(): Promise<Category[]> {
        const categories = await this.categoryModel.find()
        .limit(10)
        .exec();
        return categories;
    }
    
    async getProduct(id: string): Promise<Category>{
        const category = await this.categoryModel.findById(id).exec()
        return category;
    }

    async addCategory(createCategoryDTO:CategoryDTO): Promise<Category| any >{
        // search if the category does exists here. 
        const category_exists = await this.categoryModel.findOne({title : createCategoryDTO.title }).exec()
        if (category_exists.id){
            return {"status_code": 400, "body": "Duplicate entry"}
        }
        const newCategory = new this.categoryModel(createCategoryDTO)
        return newCategory.save();
    }

    async updateCategory(id: string, createCategoryDTO: CategoryDTO): Promise<Category>{
        const updatedCategory = await this.categoryModel.findByIdAndUpdate(id, createCategoryDTO, {new: true});
        
        return updatedCategory;
    }

    async deleteCategory(id: string): Promise<any>{
        const deletedCategory = await this.categoryModel.findByIdAndDelete(id);
        return deletedCategory;
    }

}
