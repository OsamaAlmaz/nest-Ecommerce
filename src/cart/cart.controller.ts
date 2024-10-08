import { Controller, Post, Body, Request, UseGuards,Delete, NotFoundException, Param } from '@nestjs/common';
import { Role } from 'src/auth/enums/role.enum';
import { Roles } from 'src/auth/enums/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/enums/roles.guard';
import { CartService } from './cart.service';
import { ItemDTO } from './dto/item.dto';


@Controller('cart')
export class CartController {
    constructor(private cartService: CartService){}
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.User)
    @Post('/')
    async addItemToCart(@Request() req, @Body() itemDTO: ItemDTO){
        const userId = req.user.userId
        const cart = await this.cartService.addItemToCart(userId, itemDTO);
        return cart; 
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.User)
    @Delete('/')
    async removeItemFromCart (@Request() req,  @Body() {productId}){
        const userId = req.user.userId;
        const cart = await this.cartService.removeItemFromCart(userId, productId);
        if (!cart) throw new NotFoundException("item does not exist");
        return cart; 
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.User)
    @Delete('/:id')
    async deleteCart(@Param('id') userId: string) {
      const cart = await this.cartService.deleteCart(userId);
      if (!cart) throw new NotFoundException('Cart does not exist');
      return cart;
    }
    
}
