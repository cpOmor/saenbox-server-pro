import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CategoryService } from './categoric.service';

// const createMainCategory = catchAsync(async (req, res) => {
//   const result = await CategoryService.createMainCategory(req.body);
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Main category is added',
//     data: result,
//   });
// });

const getCategory = catchAsync(async (req, res) => {
  const result = await CategoryService.getCategory();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'main category',
    data: result,
  });
});

const getSingleCategory = catchAsync(async (req, res) => {
  const result = await CategoryService.getSingleCategory();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'main category',
    data: result,
  });
});

// const createSubCategory = catchAsync(async (req, res) => {
//   const result = await CategoryService.createSubCategory(req.body);
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Sub category is added',
//     data: result,
//   });
// });

const createManiCategory = catchAsync(async (req, res) => {
  const result = await CategoryService.createManiCategory(req?.file, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category added',
    data: result,
  });
});

const updateCategory = catchAsync(async (req, res) => {
  const result = await CategoryService.updateCategory(req?.file, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category added',
    data: result,
  });
});

const updateSubCategory = catchAsync(async (req, res) => {
  const result = await CategoryService.updateSubCategory(req?.file, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category added',
    data: result,
  });
});

export const CategoryController = {
  createManiCategory,
  updateSubCategory,
  updateCategory,
  getCategory,
  getSingleCategory
};
