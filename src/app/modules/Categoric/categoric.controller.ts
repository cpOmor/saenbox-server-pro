import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CategoryService } from './categoric.service';

const createMainCategory = catchAsync(async (req, res) => {
  const result = await CategoryService.createMainCategory(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Main category is added',
    data: result,
  });
});

const createSubCategory = catchAsync(async (req, res) => {
  const result = await CategoryService.createSubCategory(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Sub category is added',
    data: result,
  });
});

const createCategory = catchAsync(async (req, res) => {
  const result = await CategoryService.createCategory(req?.file, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category added',
    data: result,
  });
});

export const CategoryController = {
  createCategory,
  createMainCategory,
  createSubCategory,
};
