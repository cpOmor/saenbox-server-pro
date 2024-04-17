/* eslint-disable @typescript-eslint/no-explicit-any */
// import QueryBuilder from '../../builder/QueryBuilder';
import { TVisitors } from './visitors.interface';
import { ProductModel } from './visitors.model';
import QueryBuilder from '../../builder/QueryBuilder';
import { productFields } from './visitors.constant';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

const createVisitorsIntoDB = async (payload: TVisitors) => {
  const result = await ProductModel.create(payload);
  return result;
};

const getAllVisitorsFromDB = async (query: Record<string, unknown>) => {
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

const getVisitorsBySellerFromDB = async (
  sellerId: Record<string, unknown>,
  query: Record<string, unknown>,
) => {
  // const result = await ProductModel.find( sellerId ).populate('seller');
  // console.log(result, 'file name : product.service line number : +-32');

  // if (!result.length) {
  //   console.log(result, 'file name : product.service line number : +-34');
  // }
  // return result;

  const productQuery = new QueryBuilder(
    ProductModel.find(sellerId).populate('seller'),
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

export const ProductServices = {
  createVisitorsIntoDB,
  getAllVisitorsFromDB,
  getVisitorsBySellerFromDB,
};
