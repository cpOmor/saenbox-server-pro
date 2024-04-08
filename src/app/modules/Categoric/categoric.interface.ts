import { Types } from 'mongoose';

export type TCategoric = {
  user: Types.ObjectId;
  mainCategory: string;
  subCategory?: string[];
  category?: string[];
  Img?: string;
  isDeleted: boolean;
};
export type TMainCategoric = {
  user: Types.ObjectId;
  mainTitle: string;
  isDeleted: boolean;
};
export type TSubCategoric = {
  user: Types.ObjectId;
  mainTitle : Types.ObjectId,
  subTitle: string;
  isDeleted: boolean;
};
