import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsEmail, IsEnum} from 'class-validator';
import { Gender, CreateUserDto } from './createUserDto';


export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsString()
    firstName?: string;

    @IsString()
    lastName?: string;

    @IsEmail()
    email?: string;

    @IsString()
    password?: string;

    @IsEnum(Gender)
    gender?: Gender;

    @IsString()
    userType?: string;
}
