import { Schema, Types, model } from 'mongoose';
import { TBasicInformation, TProduct, TRatings } from './product.interface';

// const RatingSchema = new Schema<TRatings>({
//   ratings: [
//     {
//       user: {
//         type: Schema.Types.ObjectId,
//       },
//       rating: {
//         type: String,
//         required: [true, 'Rating is required'],
//       },
//       title: {
//         type: String,
//         required: [true, 'Title is required'],
//       },
//     },
//   ],
// });

// const AttributeSchema = new Schema<TAttribute>({
//   attribute: [
//     {
//       name: {
//         type: String,
//         required: [true, 'Name is required'],
//       },

//       title: { type: [String], required: [true, 'Title is required'] },
//     },
//   ],
// });

// const BasicInformation = new Schema<TBasicInformation>({
//   // basicInformation: {
//   productName: {
//     type: String,
//     required: [true, 'Title is required'],
//   },
//   gallery: {
//     type: [String],
//     required: [true, 'Image is required'],
//   },
//   category: {
//     type: String,
//     required: [true, 'Category is required'],
//   },
//   description: {
//     type: String,
//     required: [true, 'Description is required'],
//   },
//   // },
// });

// const RatingsSchema = new Schema<TRatings>({
//   ratings: [
//     {
//       user: { type: Types.ObjectId, ref: 'User', required: true },
//       rating: { type: Number, required: true },
//       title: { type: String, required: true },
//     },
//   ],
// });

const productSchema = new Schema<TProduct>({
  // seller: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Sellers',
  // },
  basicInformation: {
    // basicInformation: {
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
    // },
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
});

export const ProductModel = model<TProduct>('products', productSchema);
