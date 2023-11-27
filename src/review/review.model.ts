import { Prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

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
  public createdAt?: Date;
}
