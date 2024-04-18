import { Schema, model } from 'mongoose';
import { TAttribute, TProduct, TRatings } from './product.interface';

const RatingSchema = new Schema<TRatings>({
  ratings: [
    {
      user: {
        type: Schema.Types.ObjectId,
      },
      rating: {
        type: String,
        required: [true, 'Rating is required'],
      },
      title: {
        type: String,
        required: [true, 'Title is required'],
      },
    },
  ],
});

const AttributeSchema = new Schema<TAttribute>({
  attribute: [
    {
      name: {
        type: String,
        required: [true, 'Name is required'],
      },

      title: { type: [String], required: [true, 'Title is required'] },
    },
  ],
});

const productSchema = new Schema<TProduct>({
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'Sellers',
  },
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  salesPrice: {
    type: String,
    required: [true, 'Sales price is required'],
  },
  regularPrice: {
    type: String,
  },
  shippingConst: {
    type: String,
    required: [true, 'Shipping const price is required'],
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity  is required'],
  },
  category: {
    type: String,
    required: [true, 'Category  is required'],
  },
  description: {
    type: String,
    required: [true, 'Description  is required'],
  },

  ratings: RatingSchema,
  tag: {
    type: [String],
    required: [true, 'Please add tags '],
  },

  attribute: AttributeSchema,
});

export const ProductModel = model<TProduct>('products', productSchema);
