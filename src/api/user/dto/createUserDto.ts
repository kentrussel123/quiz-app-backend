import { IsString, IsNotEmpty, IsEmail, IsEnum, IsNumberString } from 'class-validator';

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other'
}

export enum Course {
  BSIT = 'bsit',
  BSCS = 'bscs',
  BSCpE = 'bscpe',
  BSCE = 'bsce'
}

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    firstnName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsEnum(Gender)
    gender: Gender;

    @IsEnum(Course)
    course: Course;

    @IsNumberString()
    @IsNotEmpty()
    yearLevel: number;
}
