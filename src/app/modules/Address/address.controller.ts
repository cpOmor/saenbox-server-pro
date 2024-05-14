import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AddressServices } from './address.service';

const createAddress = catchAsync(async (req, res) => {
  const result = await AddressServices.createAddressIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product added successfully',
    data: result,
  });
});

const getAddress = catchAsync(async (req, res) => {
  const user = req?.params as string | unknown
  
  const result = await AddressServices.getAddressFromDB(user as string);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product are retrieved successfully',
    data: result,
  });
});

const updateAddress = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await AddressServices.updateAddressIntoDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product is updated successfully',
    data: result,
  });
});

const deleteAddress = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AddressServices.deleteAddressFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product is deleted successfully',
    data: result,
  });
});

export const AddressControllers = {
  createAddress,
  getAddress,
  updateAddress,
  deleteAddress,
};
