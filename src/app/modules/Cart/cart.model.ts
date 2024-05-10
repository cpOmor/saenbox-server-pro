import { Schema, model } from 'mongoose';
import { TCart } from './cart.interface';

const CartSchema = new Schema<TCart>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'You are not authenticate user'],
    },
    productId: {
      type: Schema.Types.ObjectId,
      required: [true, 'Product id is required'],
    },
    productName: {
      type: String,
      required: [true, 'Product name is required'],
    },
    unit: {
      type: Number,
      required: [true, 'Unit is required'],
    },
    image: {
      type: String,
      required: [true, 'Image is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
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

export const CartModel = model<TCart>('Carts', CartSchema);
