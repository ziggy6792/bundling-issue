import { prop as Property, getModelForClass } from '@typegoose/typegoose';
import { ObjectId } from 'mongodb';
import { Ref } from 'src/types';

import { PaginateModel } from 'typegoose-cursor-pagination';
import { BaseEntity } from './base.entity';

export class User extends BaseEntity {
  @Property({ required: true })
  name: string;

  @Property({ default: [], type: ObjectId })
  followUsers: Ref<User>[];

  // @Property({ type: ObjectId })
  // target: Ref<User>;
}

export const UserModel = getModelForClass(User) as PaginateModel<User, typeof User>;
