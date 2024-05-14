import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ReviewServices } from './review.service';

const createReview = catchAsync(async (req, res) => {
  const result = await ReviewServices.createReviewIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review added successfully',
    data: result,
  });
});

const getAllReview = catchAsync(async (req, res) => {
  const result = await ReviewServices.getAllReviewFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review are retrieved successfully',
    meta: result.meta,
    data: result.result,
  });
});

const getReview = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ReviewServices.getReviewFromDB(id as string);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review are retrieved successfully',
    data: result,
  });
});

// const getReview = catchAsync(async (req, res) => {
//   const { id } = req.params;

//   const result = await ReviewServices.getReviewFromDB(id as string);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Review are retrieved successfully',
//     data: result,
//   });
// });

const updateReview = catchAsync(async (req, res) => {
  const result = await ReviewServices.updateReviewIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review is updated successfully',
    data: result,
  });
});

const deleteReview = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ReviewServices.deleteReviewFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review is deleted successfully',
    data: result,
  });
});

export const ReviewControllers = {
  createReview,
  getAllReview,
  getReview,
  updateReview,
  deleteReview,
};
