import { Prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export enum TopLevelCategory {
  Cources,
  Services,
  Books,
  Products,
}

class HhData {
  @Prop()
  public count?: number;

  @Prop()
  public juniorSalary?: number;

  @Prop()
  public middleSalary?: number;

  @Prop()
  public seniorSalary?: number;
}

class TopPageAdvantage {
  @Prop()
  public title?: string;

  @Prop()
  public description?: string;
}

export interface TopPageModel extends Base {}

export class TopPageModel extends TimeStamps {
  @Prop({enum: TopLevelCategory})
  public firstCategory?: TopLevelCategory;

  @Prop()
  public secondCategory?: string;

  @Prop({unique: true})
  public alias?: string;

  @Prop()
  public title?: string;

  @Prop()
  public category?: string;

  @Prop({type: () => HhData})
  public hh?: HhData;

  @Prop({type: () => [TopPageAdvantage], _id: false})
  public advantages: TopPageAdvantage[] = [];

  @Prop()
  public seoText?: string;

  @Prop()
  public tagsTitle?: string;

  @Prop({type: () => [String]})
  public tags: string[] = [];
}
