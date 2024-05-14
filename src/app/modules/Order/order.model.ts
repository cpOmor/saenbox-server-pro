import { Schema, model } from 'mongoose';
import { TOrder } from './order.interface';
import { OrderStatus } from './order.constant';

const OrderSchema = new Schema<TOrder>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'You are not authenticated user'],
    },
    order: {
      type: Schema.Types.ObjectId,
      required: [true, 'Select a product'],
    },
    product: {
      type: Schema.Types.ObjectId,
      required: [true, 'Select a product'],
    },
    shippingAddress: {
      type: Schema.Types.ObjectId,
      required: [true, 'Shipping address is required'],
    },

    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
    },
    orderDate: {
      type: String,
      required: [true, 'Order date  is required'],
    },
    deliveryDate: {
      type: String,
    },
    subtotal: {
      type: Number,
      required: [true, 'Subtotal is required'],
    },
    payment: {
      type: Boolean,
      required: [true, 'Payment method is required'],
    },
    deliveryFee: {
      type: Number,
      required: [true, 'Delivery fee is required'],
    },
    status: {
      type: String,
      enum: OrderStatus,
      default: 'pending',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    reviewAdded: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const OrderModel = model<TOrder>('Orders', OrderSchema);
