import { Controller, Request, Get, Post, Body, UseGuards, Req, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDTO } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local.guard';
import { JwtAuthGuard } from './guards/jwt.guard';
import { Roles } from './enums/roles.decorator';
import { Role } from './enums/role.enum';
import { RolesGuard } from './enums/roles.guard';
import { User } from 'src/user/user.schema';
import { AuthGuard } from './guards/auth.guard';

@Controller('auth')
export class AuthController {
    constructor(
      private authService: AuthService, 
      private userService: UserService
    ){}

    @Post('/register')
    async register (@Body() createUserDTO: CreateUserDTO){
        console.log(createUserDTO)
        
        // validate if the user exists in registeration. 
        const userexists = await this.userService.findUser(createUserDTO)
        console.log("register function userexists", userexists);

        if (userexists){
          throw new HttpException("User Already Exists", HttpStatus.CONFLICT);
        }
        
        // SEND AN AUTHENTICATION EMAIL TO THE PROVIDED EMAIL AND CREATE A CACHE WITH UUID AS A KEY AND USERDTO AS THE VALUE
        

        // create a new user
        const user = await this.userService.addUser(createUserDTO)
        // email a client a confirmation email. 
        return {
          success: true, 
          message: "User registered successfully",
          user: {
            email: user.email,
            roles: user.roles,
          }
        }
    }

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login (@Request() req ){
        return this.authService.login(req.body);
    }

    @UseGuards(JwtAuthGuard)
    // @Roles(Role.User)
    // @UseGuards(AuthGuard)
    @Get('/user')
    getProfile(@Request() req) {
      return req.user;
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin)
    @Get('/admin')
    getDashboard(@Request() req) {
      return req.user;
    }
}
