import { EntityRepository, Repository } from 'typeorm';
import { RegisterUserDto } from './dto/register-user.dto';
import { User } from './user.entity';
import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcrypt'

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  
  async createUser(registerUserDto: RegisterUserDto): Promise<void> {
    const { name, username, password } = registerUserDto;
    
    const salt = await bcrypt.genSalt();
    const hashesdPassword = await bcrypt.hash(password, salt);
    
    const user = this.create({ name, username, password: hashesdPassword });
    try{
      await this.save(user);

    }catch(e){
      if(e.code === 'ER_DUP_ENTRY'){
        throw new ConflictException('This username is already registered');
      }
      throw new InternalServerErrorException();
    }
   
  }
}