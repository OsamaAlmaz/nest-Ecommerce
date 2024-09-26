import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { CreateUserDTO } from "src/user/dto/create-user.dto";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authService: AuthService){
        super({
            usernameField: 'email',  // If you want to use 'email' instead of 'username'
          })
    }
    async validate(userObject: CreateUserDTO, password: string): Promise<any>{
        console.log("I am in the localStrategy... ", userObject)
        console.log("I am in the localStrategy... ", password)

        const user = await this.authService.validateUser(userObject, password);
        if (!user){
            throw new UnauthorizedException();
        }
        return user;
    }
}