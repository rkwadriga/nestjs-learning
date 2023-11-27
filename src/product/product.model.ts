import { Prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

class ProductCharacteristic {
  @Prop()
  public name?: string;

  @Prop()
  public value?: string;
}

export interface ProductModel extends Base {}

export class ProductModel extends TimeStamps {
  @Prop()
  public image?: string;

  @Prop()
  public title?: string;

  @Prop()
  public price?: number;

  @Prop()
  public oldPrice?: number;

  @Prop()
  public credit?: number;

  @Prop()
  public calculatedRating?: number;

  @Prop()
  public description?: string;

  @Prop()
  public advantages?: string;

  @Prop()
  public disAdvantages?: string;

  @Prop({type: () => [String]})
  public categories: string[] = [];

  @Prop({type: () => [String]})
  public tags: string[] = [];

  @Prop({type: () => [ProductCharacteristic], _id: false})
  public characteristics: ProductCharacteristic[] = [];
}
