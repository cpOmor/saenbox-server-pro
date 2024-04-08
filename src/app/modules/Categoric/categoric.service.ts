/* eslint-disable @typescript-eslint/no-explicit-any */

import { CategoryModel } from './categoric.model';
import { TCategoric } from './categoric.interface';
import { User } from '../User/user.model';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

/*
 * this API create a category for products
 * input this category name and file
 */

export const category = {
  mainCategory: 'Fusion',
  subCategory: ['Shirts', 'T-Shirts'],
  Category: ['Shirts', 'T-Shirts'],
};

const createManiCategory = async (file: any, payload: TCategoric) => {
  // find user by id

  const user = await User.findById(payload.user);

  if (!user) {
    throw new AppError(httpStatus.BAD_REQUEST, 'You are not logged in');
  }

  // set  _id as user
  payload.user = user._id; //reference _id

  // create a  category
  const result = await CategoryModel.create(payload);
  return result;
};

const updateCategory1 = async (file: any, payload: TCategoric) => {
  // find user by id

  const category = await CategoryModel.findOne({
    mainCategory: payload.mainCategory,
  });
  // const subTitle = await SubCategoryModel.findOne({
  //   subTitle: payload.subTitle,
  // });

  if (!category) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Can not find parent category');
  }

  if (!category.subCategory) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Can not find parent category');
  }
  if (!payload.subCategory) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Can not find parent category');
  }
  const result = await CategoryModel.findOneAndUpdate(
    { mainCategory: payload.mainCategory },
    { $push: { subCategory: payload.subCategory } },
    { new: true }, // To return the updated document
  );
  return result;
};

const updateSubCategory = async (file: any, payload: TCategoric) => {
  // Find category by mainCategory
  const category = await CategoryModel.findOne({
    mainCategory: payload.mainCategory,
  });

  // Check if the category exists
  if (!category) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Cannot find category');
  }

  if (!category.subCategory) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Cannot find parent category');
  }

  if (!payload.subCategory) {
    // throw new AppError(httpStatus.OK, 'Category update');
    return;
  }

  const isSubCategory: string[] = payload.subCategory;

  // Check if the subcategory already exists
  if (category.subCategory.includes(isSubCategory)) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      `${payload.subCategory} is already added`,
    );
  }

  // Push new subcategory into the existing category
  const result = await CategoryModel.findOneAndUpdate(
    { mainCategory: payload.mainCategory },
    { $push: { subCategory: payload.subCategory } },
    { new: true }, // To return the updated document
  );


  return result;
};

const updateCategory = async (file: any, payload: TCategoric) => {
  const category = await CategoryModel.findOne({
    mainCategory: payload.mainCategory,
  });

  // Check if the category exists
  if (!category) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Cannot find category');
  }

  if (!category.subCategory) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Cannot find Sub category');
  }


  if (!category.category) {
    // throw new AppError(httpStatus.OK, 'Category update');
    return;
  }

  const isCategory: string[] = payload.category;

  // Check if the subcategory already exists
  if (category.category.includes(isCategory)) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      `${payload.category} is already added`,
    );
  }

  // Push new subcategory into the existing category
  const result = await CategoryModel.findOneAndUpdate(
    { mainCategory: payload.mainCategory },
    { $push: { category: payload.category } },
    { new: true }, // To return the updated document
  );

  return result;
};

const getCategory = async () => {
  const result = await CategoryModel.find().limit(13);
  return result;
};

export const CategoryService = {
  createManiCategory,
  updateSubCategory,
  updateCategory,
  getCategory,
};
