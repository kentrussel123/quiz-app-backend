import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { connect } from './database/database';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(express()),
  );
  
  app.enableCors();

  await connect();

  await app.listen(3000,()=>{
    console.log('Listening to port 3000')
  });
}
bootstrap();
