import { Schema, model } from 'mongoose';
import { TCategoric } from './categoric.interface';

const categorySchema = new Schema<TCategoric>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'User id is required'],
      ref: 'User',
    },

    mainCategory: {
      type: String,
      required: [true, 'Main title is required'],
      unique: true,
    },
    subCategory: {
      type: [String],
    },

    category: {
      type: [String],
    },
    // Img: { type: String, default: '' },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

export const CategoryModel = model<TCategoric>('Categoric', categorySchema);
