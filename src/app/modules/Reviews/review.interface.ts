/* eslint-disable @typescript-eslint/no-explicit-any */

import { Types } from 'mongoose';

export type TReview = {
  product: Types.ObjectId;
  order?: Types.ObjectId;
  user: Types.ObjectId;
  seller: Types.ObjectId;
  productRating: number;
  sellerServiceRating: number;
  deliveryServiceRating: number;
  image: string[];
  description: string;
  isDeleted: boolean;
};
