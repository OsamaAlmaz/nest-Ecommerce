import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'User', schema: UserSchema}])
  ],
  providers: [UserService],
  exports:[UserService] // so that it can be available outside of the module, i.e it can be used by the auth. 
})
export class UserModule {}
