import { Schema, model } from 'mongoose';
import {
  TCategoric,
  TSubCategoric,
} from './categoric.interface';


const MainCategorySchema = new Schema<TCategoric>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'User id is required'],
      ref: 'User',
    },

    mainTitle: {
      type: String,
      required: [true, 'Main title is required'],
    },

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

export const MainCategoryModel = model<TCategoric>(
  'MainCategoric',
  MainCategorySchema,
);

const subCategorySchema = new Schema<TSubCategoric>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'User id is required'],
      ref: 'User',
    },

    mainTitle: {
      type: Schema.Types.ObjectId,
      required: [true, 'Please select a parent title'],
    },
    subTitle: {
      type: String,
      required: [true, 'Enter a sub title'],
      unique : true
    },

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

export const SubCategoryModel = model<TSubCategoric>(
  'subCategoric',
  subCategorySchema,
);



const categorySchema = new Schema<TCategoric>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'User id is required'],
      ref: 'User',
    },

    mainTitle: {
      type: String,
      required: [true, 'Main title is required'],
    },
    subTitle: {
      type: String,
      required: [true, 'Sub title is required'],
    },

    title: {
      type: String,
      required: [true, 'Category name is required'],
      unique: true,
    },
    Img: { type: String, default: '' },
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
