import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt'; // 1
import * as bcrypt from 'bcrypt';
import { CreateUserDTO } from 'src/user/dto/create-user.dto';
 
@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService, 
        private readonly jwtService: JwtService
    ){}

    async validateUser(userdto: CreateUserDTO, password: string): Promise<any>{
        console.log("I am at the validateUser.")
        const user = await this.userService.findUser(userdto); 
        console.log("This is the user", user)
        if (user){
            const isPasswordMatch = await bcrypt.compare(
                password,
                user.password
            );
            console.log("This is isPasswordMatch", isPasswordMatch)
            if (isPasswordMatch){
                return user
            }
        }else{
            throw new UnauthorizedException();
        }
        
    }
    
    async login (body: any): Promise<{ access_token: string }>{
        
        const payload = { username: body.email, sub: body._id, roles: body.roles };
        
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    async register (createUserDTO: CreateUserDTO){
        const user = await this.userService.findUser(createUserDTO)
        if (user){
            throw new HttpException("User Already Exists", HttpStatus.CONFLICT)
            
        }
    }


}
