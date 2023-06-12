import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import { RegisterUserDto } from './dto/register-user.dto';

@Injectable()
export class AuthService {
    private readonly logger = new Logger(AuthService.name);
    
    constructor(
        @InjectRepository(UsersRepository)
        private usersRepository: UsersRepository,
    ){}

    async registerUser(registerUserDto: RegisterUserDto): Promise<void>{
        this.logger.debug(registerUserDto);
        return this.usersRepository.createUser(registerUserDto);
    }
}
