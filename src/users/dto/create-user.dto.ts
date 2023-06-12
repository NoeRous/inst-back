import { IsNotEmpty, IsString, Length } from "class-validator";
export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    @Length(2,20)
    name: string;

    @IsNotEmpty()
    username:string;

    @IsNotEmpty()
    @Length(6,20)
    password:string;
}
