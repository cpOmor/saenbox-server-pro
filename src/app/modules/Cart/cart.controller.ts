/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CartServices } from './cart.service';

const createCart = catchAsync(async (req, res) => {
  const result = await CartServices.createCartIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cart added successfully',
    data: result,
  });
});

const getCart = catchAsync(async (req, res) => {
  const { id } = req.params;
  
  const result = await CartServices.getCartFromDB(id as string);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cart are retrieved successfully',
    data: result,
  });
});

const updateCart = catchAsync(async (req, res) => {

  const result = await CartServices.updateCartIntoDB( req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cart is updated successfully',
    data: result,
  });
});

const deleteCart = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CartServices.deleteCartFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cart is deleted successfully',
    data: result,
  });
});

export const CartControllers = {
  createCart,
  getCart,
  updateCart,
  deleteCart,
};
