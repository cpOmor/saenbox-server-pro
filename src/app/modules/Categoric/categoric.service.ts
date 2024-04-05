/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  CategoryModel,
  MainCategoryModel,
  SubCategoryModel,
} from './categoric.model';
import {
  TCategoric,
  TMainCategoric,
  TSubCategoric,
} from './categoric.interface';
import { User } from '../User/user.model';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

/*
 * this API create a category for products
 * input this category name and file
 */

const createMainCategory = async (payload: TMainCategoric) => {
  // find user by id
  const user = await User.findById(payload.user);

  if (!user) {
    throw new AppError(httpStatus.BAD_REQUEST, 'You are not logged in');
  }

  // set  _id as user
  payload.user = user._id; //reference _id
  // create a  category

  const result = await MainCategoryModel.create(payload);
  return result;
};

const createSubCategory = async (payload: TSubCategoric) => {
  // find user by id
  const user = await User.findById(payload.user);
  const mainTitle = await MainCategoryModel.findById(payload.mainTitle);

  if (!user) {
    throw new AppError(httpStatus.BAD_REQUEST, 'You are not logged in');
  }

  if (!mainTitle) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Something is wrong');
  }

  // set  _id as user
  payload.user = user._id; //reference _id
  payload.mainTitle = mainTitle._id; //reference _id
  // create a  category

  const result = await SubCategoryModel.create(payload);
  return result;
};

const createCategory = async (file: any, payload: TCategoric) => {
  // find user by id

  console.log(  payload  , 'payload start');
  
  const user = await User.findById(payload.user);
  // const mainTitle = await MainCategoryModel.findById(payload.mainTitle);
  // const subTitle = await SubCategoryModel.findById(payload.subTitle);

  if (!user) {
    throw new AppError(httpStatus.BAD_REQUEST, 'You are not logged in');
  }

  // if (!mainTitle) {
  //   throw new AppError(httpStatus.BAD_REQUEST, 'Something is wrong');
  // }

  // if (!subTitle) {
  //   throw new AppError(httpStatus.BAD_REQUEST, 'Something is wrong');
  // }

  // set  _id as user
  payload.user = user._id; //reference _id
 

  console.log(  payload  , 'payload end');
  

  // create a  category
  const result = await CategoryModel.create({ payload });
  return result;
};

export const CategoryService = {
  createCategory,
  createMainCategory,
  createSubCategory,
};
