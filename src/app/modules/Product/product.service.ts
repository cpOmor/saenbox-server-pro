/* eslint-disable @typescript-eslint/no-explicit-any */
// import QueryBuilder from '../../builder/QueryBuilder';
import { TProduct } from './product.interface';
import { ProductModel } from './product.model';
import QueryBuilder from '../../builder/QueryBuilder';
import { productFields } from './product.constant';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

const createProductIntoDB = async (payload: TProduct) => {
  const result = await ProductModel.create(payload);
  return result;
};

const getAllProductFromDB = async (query: Record<string, unknown>) => {
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

  return {
    meta,
    result,
  };
};

const getProductBySellerFromDB = async (
  sellerId: Record<string, unknown>,
  query: Record<string, unknown>,
) => {
  // const result = await ProductModel.find( sellerId ).populate('seller');
  // console.log(result, 'file name : product.service line number : +-32');

  // if (!result.length) {
  //   console.log(result, 'file name : product.service line number : +-34');
  // }
  // return result;

  const productQuery = new QueryBuilder(ProductModel.find(sellerId).populate('seller'), query)
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
  return result;
};

const updateProductIntoDB = async (id: string, payload: Partial<TProduct>) => {
  const result = await ProductModel.findByIdAndUpdate(id, payload);
  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await ProductModel.findByIdAndUpdate(
    id,
    { isDeleted: true },
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
  getProductBySellerFromDB,
  getSingleProductFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
  dropToProductFromDB,
};
