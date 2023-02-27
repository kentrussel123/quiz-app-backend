import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuizDocument = Quiz & Document;

@Schema()
export class Quiz {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  questions: Question[];

  @Prop()
  createdBy: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

@Schema()
export class Question {
  @Prop({ required: true })
  question: string;

  @Prop({ required: true })
  options: string[];

  @Prop({ required: true })
  answer: number;

  @Prop()
  explanation: string;
}

export const QuizSchema = SchemaFactory.createForClass(Quiz);
