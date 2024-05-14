/* eslint-disable @typescript-eslint/no-explicit-any */

import { Types } from 'mongoose';

export type TStatus =
  | 'pending'
  | 'processing'
  | 'shipped'
  | 'completed'
  | 'cancelled';

export type TOrder = {
  user: Types.ObjectId;
  product: Types.ObjectId;
  order: Types.ObjectId;
  shippingAddress: Types.ObjectId;
  quantity: number;
  subtotal: number;
  payment: boolean;
  reviewAdded: boolean;
  deliveryFee: number;
  status: TStatus;
  orderDate: string;
  deliveryDate?: string;
  isDeleted: boolean;
};

export type TDateFormatOptions = {
  year?: 'numeric' | '2-digit';
  month?: 'numeric' | '2-digit' | 'short' | 'long';
  day?: 'numeric' | '2-digit';
  hour?: 'numeric' | '2-digit';
  minute?: 'numeric' | '2-digit';
  second?: 'numeric' | '2-digit';
};
