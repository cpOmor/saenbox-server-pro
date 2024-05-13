import { Schema, model } from 'mongoose';
import { TReview } from './review.interface';


const ReviewSchema = new Schema<TReview>(
  {
    product: {
      type: Schema.Types.ObjectId,
      required: [true, 'Select a product'],
    },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'You are not authenticated user'],
    },
    seller: {
      type: Schema.Types.ObjectId,
      required: [true, 'Select a seller'],
    },
    productRating: {
      type: Number,
      required: [true, 'Product rating is required'],
    },
    sellerServiceRating: {
      type: Number,
      required: [true, 'Seller service rating is required'],
    },
    deliveryServiceRating: {
      type: Number,
      required: [true, 'Delivery service rating is required'],
    },
    image: {
      type: String,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);


export const ReviewModel = model<TReview>('Reviews', ReviewSchema);

