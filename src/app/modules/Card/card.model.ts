import { Schema, model } from 'mongoose';
import { TCard } from './card.interface';

const CardSchema = new Schema<TCard>(
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

export const CardModel = model<TCard>('Cards', CardSchema);

