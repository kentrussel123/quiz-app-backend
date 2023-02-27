import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { connect } from './database/database';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await connect();

  await app.listen(3000,()=>{
    console.log('Listening to port 3000')
  });
}
bootstrap();
