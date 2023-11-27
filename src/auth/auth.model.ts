import { Prop } from '@typegoose/typegoose';
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';

export interface AuthModel extends Base {}

export class AuthModel extends TimeStamps {
  @Prop({required: true, unique: true})
  public email?: string;

  @Prop({required: true})
  public passwordHash?: string;
}
