import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsEmail, IsEnum, IsNumberString } from 'class-validator';
import { Gender, Course, CreateUserDto } from './createUserDto';


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

    @IsEnum(Course)
    course?: Course;

    @IsNumberString()
    yearLevel?: number;
}
