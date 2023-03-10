import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  password: string;

  @Prop({ required: true })
  userType: string;

  @Prop({ required: true })
  gender: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
