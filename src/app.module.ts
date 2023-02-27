import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppService } from './app.service';
import { AppController } from './app.controller';

//quiz api component
import { QuizController } from './api/quiz/quiz.controller';
import { QuizService } from './api/quiz/quiz.service';
import { Quiz, QuizSchema } from './api/quiz/models/quiz.model';

//user api component
import { User, UserSchema } from './api/user/models/user.model';
import { UserController } from './api/user/user.controller';
import { UserService } from './api/user/user.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/quiz-db'),
    MongooseModule.forFeature([
      {name:Quiz.name, schema:QuizSchema},
      {name:User.name, schema:UserSchema}
    ])
  ],
  controllers: [
    AppController,
    QuizController,
    UserController,
  ],
  providers: [
    AppService,
    QuizService,
    UserService
  ]
})
export class AppModule {}
