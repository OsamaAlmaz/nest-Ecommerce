import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Query, UseGuards } from '@nestjs/common';
import { CategoryDTO } from './dto/create-category.dto';
import { CategoryService } from './category.service';
import { Roles } from 'src/auth/enums/roles.decorator';
import { Role } from 'src/auth/enums/role.enum';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/enums/roles.guard';

@Controller('store/category')
export class CategoryController {
    constructor(private categoryService: CategoryService){}
    @Get('/')
    async getAllCategories(){
        // apply pagination.
        
        const categories = await this.categoryService.getAllCategories()
        return categories;
    }
    @Post("/")
    @Roles(Role.Admin)
    @UseGuards(JwtAuthGuard, RolesGuard)
    async createCategory(@Body() categoryDTO: CategoryDTO){

        const createdcategory = this.categoryService.addCategory(categoryDTO)
        return createdcategory;
    }
    @Post('/:id')
    // @Roles(Role.Admin)
    // @UseGuards(JwtAuthGuard, RolesGuard)
    async updateCategory(@Param('id') id: string, @Body() createCategoryDTO: CategoryDTO){
        const updatedCategory = this.categoryService.updateCategory(id, createCategoryDTO)
        
        if (!updatedCategory) throw new NotFoundException("Category Does not exists")
        return updatedCategory
    }
    
    @Delete("/:id")
    @Roles(Role.Admin)
    @UseGuards(JwtAuthGuard, RolesGuard)
    async deleteCategory(@Param('id') id: string){
        const category = this.categoryService.deleteCategory(id)
        if(!category) throw new NotFoundException('product not found')
        return category
    }

}

