/* eslint-disable @typescript-eslint/no-explicit-any */

import QueryBuilder from '../../builder/QueryBuilder';
import { reviewFields, thisTime } from './review.constant';
import { TReview } from './review.interface';
import { ReviewModel } from './review.model';

const createReviewIntoDB = async (payload: TReview) => {
  const result = await ReviewModel.create(payload);
  return result;
};

const getAllReviewFromDB = async (query: Record<string, unknown>) => {
  const reviewQuery = new QueryBuilder(ReviewModel.find(), query)
    .search(reviewFields)
    .filter()
    .sort()
    .paginate()
    .fields();
  const result = await reviewQuery.modelQuery;
  const meta = await reviewQuery.countTotal();

  return {
    meta,
    result,
  };
};

const getSingleReviewFromDB = async (id: string) => {

  const result = await ReviewModel.findById(id);


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
  getSingleReviewFromDB,
  geTReviewFromDB,
  updateReviewIntoDB,
  deleteReviewFromDB,
};
