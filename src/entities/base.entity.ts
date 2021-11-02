import { modelOptions, plugin } from '@typegoose/typegoose';
import { ObjectId } from 'mongodb';
import paginationPlugin from 'typegoose-cursor-pagination';

@plugin(paginationPlugin)
@modelOptions({
  schemaOptions: {
    timestamps: true,

    toJSON: {
      virtuals: true,
    },
  },
})
export class BaseEntity {
  readonly _id: ObjectId;

  readonly createdAt: Date;

  // @Field()
  // readonly updatedAt: Date;

  public equals(compare: any): boolean {
    return this === compare;
  }
}
