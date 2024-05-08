import { Schema, Types, model } from 'mongoose';
import { TProduct } from './product.interface';

const productSchema = new Schema<TProduct>(
  {
    seller: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required : [true, "You are not authenticate user"]
    },
    basicInformation: {
      productName: {
        type: String,
        required: [true, 'Title is required'],
      },
      gallery: {
        type: [String],
        required: [true, 'Image is required'],
      },
      category: {
        type: String,
        required: [true, 'Category is required'],
      },
      description: {
        type: String,
        required: [true, 'Description is required'],
      },
    },
    specification: {
      brand: {
        type: String,
        required: [true, 'Brand is required'],
        default: 'No Brand',
      },
      weight: {
        type: String,
        required: [true, 'Category is required'],
      },
      variant: {
        type: Array,
        image: {
          type: String,
          required: [true, 'Variant image is required'],
        },
        price: {
          type: String,
        },
        title: {
          type: String,
          required: [true, 'Variant title is required'],
        },
        stock: {
          type: String,
          required: [true, 'Variant stock is required'],
        },
      },
      returns: {
        type: Boolean,
        default: true,
      },
    },
    salesInfo: {
      quantity: {
        type: Number,
        required: [true, 'Quantity is required'],
      },
      salesPrice: {
        type: Number,
        required: [true, 'Sales price is required'],
      },
      regularPrice: {
        type: Number,
        required: [true, 'Regular price is required'],
      },
      minParches: {
        type: Number,
        required: [true, 'Minimum parches is required'],
      },
      maxParches: {
        type: Number,
        required: [true, 'Maximum parches is required'],
      },
    },

    shipping: {
      weight: {
        type: Number,
        required: [true, 'Weight is required'],
      },
      parcelSize: {
        type: Number,
        required: [true, 'ParcelSize price is required'],
      },
      dangerousGoods: {
        type: Boolean,
        default: false,
      },
    },

    ratings: [
      {
        user: { type: Types.ObjectId, ref: 'User', required: true },
        rating: { type: Number, required: true },
        title: { type: String, required: true },
      },
    ],

    isDraft: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const ProductModel = model<TProduct>('products', productSchema);
