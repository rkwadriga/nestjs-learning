import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  //public _id?: string;
  @Prop({ required: true })
  public email?: string;

  @Prop({ required: true })
  public password?: string;

  @Prop([String])
  public images: string[] = [];
}

export const UserSchema = SchemaFactory.createForClass(User);