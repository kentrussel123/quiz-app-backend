import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNotEmpty, IsArray, IsOptional } from 'class-validator';

export class UpdateQuizDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsArray()
  @IsNotEmpty()
  questions: {
    title: string;
    options: string[];
    correctOption: number;
  }[];
}

export class PartialQuizDto extends PartialType(UpdateQuizDto) {}
