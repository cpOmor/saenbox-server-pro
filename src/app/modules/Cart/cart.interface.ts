/* eslint-disable @typescript-eslint/no-explicit-any */

import { Types } from 'mongoose';

export type TCart = {
  user: Types.ObjectId;
  productId: Types.ObjectId;
  productName: string;
  unit: number;
  image: string;
  quantity: number;
  isDeleted: boolean;
};
