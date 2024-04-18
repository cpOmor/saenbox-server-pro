/* eslint-disable @typescript-eslint/no-explicit-any */
import { Types } from 'mongoose';

export type TAttribute = {
  attribute: [{ name: string; title: string[] }];
};

export type TRatings = {
  ratings: [{ user: Types.ObjectId; rating: string; title: string }];
};

export type TProduct = {
  seller: Types.ObjectId;
  title: string;
  salesPrice: string;
  regularPrice: string;
  shippingConst: string;
  quantity: number;
  attribute: TAttribute;
  category: string;
  description: string;
  ratings: TRatings;
  tag: string[]; 
};
