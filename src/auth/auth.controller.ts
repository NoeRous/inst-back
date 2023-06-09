import { Body,Controller, Post, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/register')
    register(@Body() registerUserDto: RegisterUserDto): Promise<void>{
        return this.authService.registerUser(registerUserDto);
    }

    @Get('/index')
    getAll(){
        return "tengo todo ";
    }
}
