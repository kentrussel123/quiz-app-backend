import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Quiz, QuizDocument } from './models/quiz.model';
import { CreateQuizDto } from './dto/createQuizDto';
import { UpdateQuizDto } from './dto/updateQuizDto';

@Injectable()
export class QuizService {
  constructor(
    @InjectModel(Quiz.name) private quizModel: Model<QuizDocument>,
  ) {}

  async getAllQuizzes(): Promise<Quiz[]> {
    return this.quizModel.find().exec();
  }

  async getQuizById(id: string): Promise<Quiz> {
    const quiz = await this.quizModel.findById(id).exec();
    if (!quiz) {
      throw new NotFoundException(`Quiz with ID ${id} not found`);
    }
    return quiz;
  }

  async createQuiz(createQuizDto: CreateQuizDto): Promise<Quiz> {
    const createdQuiz = new this.quizModel(createQuizDto);
    return createdQuiz.save();
  }

  async updateQuiz(id: string, updateQuizDto: UpdateQuizDto): Promise<Quiz> {
    const updatedQuiz = await this.quizModel.findByIdAndUpdate(
      id,
      updateQuizDto,
      { new: true },
    );
    if (!updatedQuiz) {
      throw new NotFoundException(`Quiz with ID ${id} not found`);
    }
    return updatedQuiz;
  }

  async deleteQuiz(id: string): Promise<void> {
    const result = await this.quizModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Quiz with ID ${id} not found`);
    }
  }
}
