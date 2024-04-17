import { Schema, model } from 'mongoose';
import { TProduct } from './visitors.interface';

const productSchema = new Schema<TProduct>({
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'Sellers',
  },
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
});

export const ProductModel = model<TProduct>('products', productSchema);
