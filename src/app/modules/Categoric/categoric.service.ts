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
  // find user by
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

const createCategory = async (payload: TCategoric) => {
  const mainCategory = await CategoryModel.findOne({
    mainCategory: payload.mainCategory,
  });

  // Check if the category exists
  if (!mainCategory) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Cannot find main category');
  }

  if (!category.subCategory) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Cannot find Sub category');
  }

  console.log(
    payload.category,
    'file name : categoric.service line number : +-115',
  );

  //   {
  //     "mainCategory": "Fasion 2",
  //     "subCategory": [
  //         "one3"
  //     ],
  //     "category": [
  //         {
  //             "title": "ths suba",
  //             "image": "image"
  //         },
  //         {
  //             "title": "this suba",
  //             "image": "image"
  //         }
  //     ]
  // }

  // const category = payload.category;

  // if (category.category.includes(isCategory)) {
  //   throw new AppError(
  //     httpStatus.BAD_REQUEST,
  //     `${payload.category} is already added`,
  //   );
  // }

  const result = await CategoryModel.findOneAndUpdate(
    { mainCategory: payload.mainCategory },
    { category: payload.category },
    { new: true },
  );

  return result;
};

const getSingleCategory = async () => {
  const isCategory = await CategoryModel.find();

  const category: string[] = [];
  // const mergedArray  = [];

  isCategory.map((item) => {
    category.push(...(item.category as string[]));
  });
  const uniqueCategory = new Map();

  category.forEach((obj) => {
    uniqueCategory.set(obj.title as any, obj);
  });

  const result = Array.from(uniqueCategory.values());
  return result;
};

const getSubCategory = async () => {
  const isCategory = await CategoryModel.find();

  console.log(isCategory, 'file name : categoric.service line number : +-162');

  const category: string[] = [];
  // const mergedArray  = [];

  isCategory.map((item) => {
    category.push(...(item.category as string[]));
  });
  const uniqueCategory = new Map();

  category.forEach((obj) => {
    uniqueCategory.set(obj.title as any, obj);
  });

  const result = Array.from(uniqueCategory.values());
  return result;
};

const getCategory = async () => {
  const result = await CategoryModel.find();

  return result;
};

export const CategoryService = {
  createManiCategory,
  updateSubCategory,
  createCategory,
  getCategory,
  getSingleCategory,
  getSubCategory,
};
