import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BannerServices } from './banner.service';

const createBanner = catchAsync(async (req, res) => {
  const result = await BannerServices.createBannerIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product added successfully',
    data: result,
  });
});

const getBanner = catchAsync(async (req, res) => {
  const result = await BannerServices.getBannerFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product are retrieved successfully',
    data: result,
  });
});

const updateBanner = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await BannerServices.updateBannerIntoDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product is updated successfully',
    data: result,
  });
});

const deleteBanner = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BannerServices.deleteBannerFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product is deleted successfully',
    data: result,
  });
});


export const BannerControllers = {
  createBanner,
  getBanner,
  updateBanner,
  deleteBanner,
};
