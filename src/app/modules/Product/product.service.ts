/* eslint-disable @typescript-eslint/no-explicit-any */
// import QueryBuilder from '../../builder/QueryBuilder';
import { TProduct, TProductQuery, TQuery } from './product.interface';
import { ProductModel } from './product.model';
import QueryBuilder from '../../builder/QueryBuilder';
import { productFields } from './product.constant';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { User } from '../User/user.model';
import { USER_ROLE } from '../User/user.constant';

const createProductIntoDB = async (payload: TProduct) => {
  // console.log(payload, 'file name : product.service line number : +-13');

  const findUser = await User.findOne({
    email: payload.seller,
    role: USER_ROLE.seller,
  });

  if (!findUser) {
    throw new AppError(
      httpStatus.UNAUTHORIZED,
      'You are not authorized user, please agin login',
    );
  }

  payload.seller = findUser._id;

  const result = await ProductModel.create(payload);
  return result;
};

const getAllProductFromDB = async (query: Record<string, unknown>) => {
  const productQuery = new QueryBuilder(ProductModel.find(), query)
    .search(productFields)
    .filter()
    .sort()
    .paginate()
    .fields();
  const result = await productQuery.modelQuery;
  const meta = await productQuery.countTotal();

  return {
    meta,
    result,
  };
};

const getNewProductFromDB = async (query: TQuery): Promise<TProductQuery> => {
  // Extract createdAt range from the query
  const { createdAtMin, createdAtMax, ...restQuery } = query;

  console.log(   'enter'  , 'file name : product.service line number : +-54');
  
  // Build the base query
  const baseQuery = ProductModel.find();

  // Apply createdAt filter if provided
  if (createdAtMin && createdAtMax) {
    baseQuery
      .where('createdAt')
      .gte(createdAtMin as any)
      .lte(createdAtMax as any);
  } else if (createdAtMin) {
    baseQuery.where('createdAt').gte(createdAtMin as any);
  } else if (createdAtMax) {
    baseQuery.where('createdAt').lte(createdAtMax as any);
  }

  // Use QueryBuilder for other operations (search, filter, sort, paginate, fields)
  const productQuery = new QueryBuilder<TProduct>(baseQuery, restQuery)
    .search(productFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  // Execute the query and count total
  const [result, total] = await Promise.all([
    productQuery.modelQuery,
    productQuery.countTotal(),
  ]);

  return {
    meta: { total },
    result,
  };
};

const getProductBySellerFromDB = async (
  email: Record<string, unknown>,
  query: Record<string, unknown>,
) => {
  // const result = await ProductModel.find( sellerId ).populate('seller');
  // console.log(result, 'file name : product.service line number : +-32');

  // if (!result.length) {
  //   console.log(result, 'file name : product.service line number : +-34');
  // }
  // return result;

  const productQuery = new QueryBuilder(
    ProductModel.find().populate('seller'),
    query,
  )
    .search(productFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await productQuery.modelQuery;
  const meta = await productQuery.countTotal();

  if (result.length < 1) {
    throw new AppError(httpStatus.NOT_FOUND, 'Not sell this time!');
  }

  return {
    meta,
    result,
  };
};

const getSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.findById(id).populate('seller');
  // const result = await ProductModel.findById(id);
  return result;
};

const updateProductIntoDB = async (id: string, payload: Partial<TProduct>) => {
  const result = await ProductModel.findByIdAndUpdate(id, payload);
  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await ProductModel.findByIdAndUpdate(
    id,
    { isDelete: true },
    {
      new: true,
    },
  );
  return result;
};
const dropToProductFromDB = async (id: string) => {
  const result = await ProductModel.findByIdAndUpdate(
    id,
    { isDeleted: true },
    {
      new: true,
    },
  );
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getNewProductFromDB,
  getProductBySellerFromDB,
  getSingleProductFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
  dropToProductFromDB,
};
