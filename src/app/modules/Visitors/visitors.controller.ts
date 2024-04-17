import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProductServices } from './visitors.service';

const createVisitors = catchAsync(async (req, res) => {
  const result = await ProductServices.createProductIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product added successfully',
    data: result,
  });
});

const getAllVisitors = catchAsync(async (req, res) => {
  const result = await ProductServices.getAllProductFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product are retrieved successfully',
    meta: result.meta,
    data: result.result,
  });
});

const getVisitorsBySeller = catchAsync(async (req, res) => {
  const result = await ProductServices.getProductBySellerFromDB(
    req.params,
    req.query,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product are retrieved successfully',
    meta: result.meta,
    data: result.result,
  });
});

export const ProductControllers = {
  createVisitors,
  getAllVisitors,
  getVisitorsBySeller,
};
