import { Types } from 'mongoose';

export type TProduct = {
  seller: Types.ObjectId;
  title: string;
};
