import { Controller, Request, Get, Post, Body, UseGuards, Req, HttpException, HttpStatus, Inject, Query } from '@nestjs/common';
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
import { SendEmailDTO } from 'src/mailer/mailer.interface';
import { JwtService } from '@nestjs/jwt';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { MailerService } from 'src/mailer/mailer.service';
import { v4 as uuidv4 } from 'uuid';

@Controller('auth')
export class AuthController {
    constructor(
      private authService: AuthService, 
      private userService: UserService,
      private JwtService: JwtService,
      @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
      private readonly mailerService: MailerService
    ){}

    @Post('/register')
    async register (@Body() createUserDTO: CreateUserDTO){
        console.log(createUserDTO)
        // validate if the user exists in registeration. 
        const userexists = await this.userService.findUser(createUserDTO)
        if (userexists){
          throw new HttpException("User Already Exists", HttpStatus.CONFLICT);
        }
        const payload = {username: createUserDTO.username , email: createUserDTO.email}
        // SEND AN AUTHENTICATION EMAIL TO THE PROVIDED EMAIL AND CREATE A CACHE WITH UUID AS A KEY AND USERDTO AS THE VALUE
        // create a JWT token. 
        const uuidToken = uuidv4()
        const activationUrl = `http://localhost:3000/auth/activate?token=${uuidToken}`
        const emailData: SendEmailDTO = {
          recipients: [{name: createUserDTO.username, address: createUserDTO.email}],
          subject: 'Activate you email with us',
          html: `<p>Please activate your account with us using the following link:</p>
         <p><a href="${activationUrl}" target="_blank">Activate your account</a></p>`
        }
        console.log(activationUrl)
        
        // cache the token with the createUserDTO in redis. 
        
        await this.cacheManager.set(uuidToken, createUserDTO)
        console.log("this is the type of uuid", typeof(uuidToken))
        console.log("this value is from the cache", await this.cacheManager.get(uuidToken))

        // send the token. 
        this.mailerService.sendEmail(emailData)
        
        
        return {
          success: true,
          message: "User is registered. Please activate your account by your email"
        }
    }
    @Get('/activate')
    async activate(@Query() query: any){
      const token = query.token;
      console.log(token)
      const userdto: CreateUserDTO = await this.cacheManager.get(token)
      console.log(userdto)
      if (!userdto){
        throw new HttpException("Activation email is not valid or has Expired", HttpStatus.CONFLICT);
      }
      const user = this.userService.addUser(userdto)

      return {
        success: true,
        message: "User is officially activated please Login"
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
