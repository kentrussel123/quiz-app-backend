import { IsString, IsNotEmpty, IsEmail, IsEnum} from 'class-validator';

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other'
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

    @IsString()
    userType
}
