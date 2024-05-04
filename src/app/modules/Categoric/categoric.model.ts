import { Schema, model } from 'mongoose';
import { TCategoric } from './categoric.interface';

const categorySchema = new Schema<TCategoric>(
  {
    mainCategory: {
      type: String,
      required: [true, 'Main title is required'],
      unique: true,
    },
    subCategory: {
      type: [String],
    },

    category: [
      {
        title: { type: String },
        image: { type: String },
      },
    ],
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
