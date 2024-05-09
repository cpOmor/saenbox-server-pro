import { Schema, model } from 'mongoose';
import { TOrder } from './order.interface';

const OrderSchema = new Schema<TOrder>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'You are not authenticate user'],
    },

    product: {
      type: Schema.Types.ObjectId,
      required: [true, 'Select a product'],
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

export const OrderModel = model<TOrder>('Orders', OrderSchema);

