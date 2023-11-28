import { Prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { Types } from 'mongoose';

export interface ReviewModel extends Base {}

export class ReviewModel extends TimeStamps {
  @Prop()
  public name?: string;

  @Prop()
  public title?: string;

  @Prop()
  public description?: string;

  @Prop()
  public rating?: number;

  @Prop()
  public productId?: Types.ObjectId;
}
