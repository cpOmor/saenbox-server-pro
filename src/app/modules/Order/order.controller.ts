import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { OrderServices } from './order.service';

const createOrder = catchAsync(async (req, res) => {
  const result = await OrderServices.createOrderIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order added successfully',
    data: result,
  });
});

const getAllOrder = catchAsync(async (req, res) => {
  const result = await OrderServices.getAllOrderFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order are retrieved successfully',
    meta: result.meta,
    data: result.result,
  });
});

const getSingleOrder = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await OrderServices.getSingleOrderFromDB(id as string);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order are retrieved successfully',
    data: result,
  });
});

const getOrder = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await OrderServices.getOrderFromDB(id as string);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order are retrieved successfully',
    data: result,
  });
});

const updateOrder = catchAsync(async (req, res) => {
  const result = await OrderServices.updateOrderIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order is updated successfully',
    data: result,
  });
});

const deleteOrder = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await OrderServices.deleteOrderFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order is deleted successfully',
    data: result,
  });
});

export const OrderControllers = {
  createOrder,
  getAllOrder,
  getSingleOrder,
  getOrder,
  updateOrder,
  deleteOrder,
};
