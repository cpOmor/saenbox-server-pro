import { Types } from 'mongoose';

export type TCategoric = {
  user: Types.ObjectId;
  Img?: string;
  mainTitle: string;
  subTitle: string;
  title: string;
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
