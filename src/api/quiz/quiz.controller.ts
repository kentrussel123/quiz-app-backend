import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    NotFoundException,
    Delete,
    Put,
  } from '@nestjs/common';
  import { QuizService } from './quiz.service';
  import { CreateQuizDto } from './dto/createQuizDto';
  import { UpdateQuizDto } from './dto/updateQuizDto';
  import { Quiz } from './models/quiz.model';
  
  @Controller('quiz')
  export class QuizController {
    constructor(private readonly quizService: QuizService) {}
  
    @Get()
    async getAllQuizzes(): Promise<Quiz[]> {
      return this.quizService.getAllQuizzes();
    }
  
    @Get(':id')
    async getQuizById(@Param('id') id: string): Promise<Quiz> {
      try {
        return await this.quizService.getQuizById(id);
      } catch (e) {
        throw new NotFoundException(e.message);
      }
    }
  
    @Post()
    async createQuiz(@Body() createQuizDto: CreateQuizDto): Promise<Quiz> {
      return this.quizService.createQuiz(createQuizDto);
    }
  
    @Put(':id')
    async updateQuiz(
      @Param('id') id: string,
      @Body() updateQuizDto: UpdateQuizDto,
    ): Promise<Quiz> {
      try {
        return await this.quizService.updateQuiz(id, updateQuizDto);
      } catch (e) {
        throw new NotFoundException(e.message);
      }
    }
  
    @Delete(':id')
    async deleteQuiz(@Param('id') id: string): Promise<void> {
      try {
        await this.quizService.deleteQuiz(id);
      } catch (e) {
        throw new NotFoundException(e.message);
      }
    }
  }
  