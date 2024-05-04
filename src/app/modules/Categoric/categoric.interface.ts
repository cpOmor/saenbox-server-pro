import { Types } from 'mongoose';

export type TCategoric = {
  mainCategory: string;
  subCategory?: string[];
  category?: string[];
  image: string;
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
