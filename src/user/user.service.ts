import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { CreateUserDTO } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<UserDocument>
    ){}
    
    async addUser(createUserDTO: CreateUserDTO): Promise<User>{
        const newUser = await this.userModel.create(createUserDTO);
        newUser.password = await bcrypt.hash(newUser.password, 10);
        return newUser.save();
    }

    async findUser (userObject: CreateUserDTO): Promise<User | undefined> {
        const user = await this.userModel.findOne({
            $or: [
                {email: userObject.email},
                {username: userObject.username}
            ]
        });
        return user; 
    }
    
}
