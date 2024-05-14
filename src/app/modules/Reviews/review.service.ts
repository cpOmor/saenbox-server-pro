/* eslint-disable @typescript-eslint/no-explicit-any */

import httpStatus from 'http-status';
import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../errors/AppError';
import { OrderModel } from '../Order/order.model';
import { thisTime } from './review.constant';
import { TReview } from './review.interface';
import { ReviewModel } from './review.model';

const createReviewIntoDB = async (payload: TReview) => {
  const isOrder = await OrderModel.findById(payload.order);

  if (!isOrder) {
    throw new AppError(httpStatus.NOT_FOUND, 'Order cannot find!');
  }
  const user = isOrder.user;
  const product = isOrder.product;
  payload.seller = user;
  payload.product = product;
  const result = await ReviewModel.create(payload);
  return result;
};

const getAllReviewFromDB = async (query: Record<string, unknown>) => {
  // const reviewQuery = new QueryBuilder(ReviewModel.find(), query)
  //   .search(reviewFields)
  //   .filter()
  //   .sort()
  //   .paginate()
  //   .fields();
  // const result = await reviewQuery.modelQuery;
  // const meta = await reviewQuery.countTotal();

  // return {
  //   meta,
  //   result,
  // };
  return;
};

const getReviewFromDB = async (id: string) => {
  const result = await ReviewModel.find({ product: id }).populate('user');

  return result;
};

const getReviewForSellerFromDB = async (id: string) => {
  const result = await ReviewModel.find({ product: id }).populate('user');

  return result;
};

const geTReviewFromDB = async (user: string) => {
  const result = await ReviewModel.find({ user });
  return result;
};

const updateReviewIntoDB = async (payload: any) => {
  const status = { status: payload?.data?.status };

  if (status.status == 'shipped') {
    const deliveryDate = thisTime();

    const result = await ReviewModel.findOneAndUpdate(
      { _id: payload?.reviewId },
      { ...status, deliveryDate },
    );

    return result;
  } else {
    const result = await ReviewModel.findOneAndUpdate(
      { _id: payload?.reviewId },
      status,
    );

    return result;
  }
};

const deleteReviewFromDB = async (id: string) => {
  const result = await ReviewModel.findByIdAndDelete(id);

  if (!result) {
    throw new Error('Review not found or already deleted');
  }

  return result;
};

export const ReviewServices = {
  createReviewIntoDB,
  getAllReviewFromDB,
  getReviewFromDB,
  getReviewForSellerFromDB,
  geTReviewFromDB,
  updateReviewIntoDB,
  deleteReviewFromDB,
};
