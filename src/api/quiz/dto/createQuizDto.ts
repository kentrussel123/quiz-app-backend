import { IsString, IsNotEmpty, IsArray } from 'class-validator';

export class CreateQuizDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  description: string;

  @IsArray()
  @IsNotEmpty()
  questions: {
    title: string;
    options: string[];
    correctOption: number;
  }[];
}
