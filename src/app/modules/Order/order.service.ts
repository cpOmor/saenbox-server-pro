/* eslint-disable @typescript-eslint/no-explicit-any */

import QueryBuilder from '../../builder/QueryBuilder';
import { orderFields, thisTime } from './order.constant';
import { TOrder } from './order.interface';
import { OrderModel } from './order.model';

const createOrderIntoDB = async (payload: TOrder) => {
  const orderDate = thisTime();

  payload.orderDate = orderDate;

  const result = await OrderModel.create(payload);
  return result;
};

const getAllOrderFromDB = async (query: Record<string, unknown>) => {
  const orderQuery = new QueryBuilder(OrderModel.find(), query)
    .search(orderFields)
    .filter()
    .sort()
    .paginate()
    .fields();
  const result = await orderQuery.modelQuery;
  const meta = await orderQuery.countTotal();

  return {
    meta,
    result,
  };
};

const getSingleOrderFromDB = async (id: string) => {
  console.log(id, 'file name : order.service line number : +-35');

  const result = await OrderModel.findById(id);

  console.log(result, 'file name : order.service line number : +-40');

  return result;
};

const getOrderFromDB = async (user: string) => {
  const result = await OrderModel.find({ user });
  return result;
};

const updateOrderIntoDB = async (payload: any) => {
  const status = { status: payload?.data?.status };

  if (status.status == 'shipped') {
    const deliveryDate = thisTime();

    const result = await OrderModel.findOneAndUpdate(
      { _id: payload?.orderId },
      { ...status, deliveryDate },
    );

    return result;
  } else {
    const result = await OrderModel.findOneAndUpdate(
      { _id: payload?.orderId },
      status,
    );

    return result;
  }
};

const deleteOrderFromDB = async (id: string) => {
  const result = await OrderModel.findByIdAndDelete(id);

  if (!result) {
    throw new Error('Order not found or already deleted');
  }

  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrderFromDB,
  getSingleOrderFromDB,
  getOrderFromDB,
  updateOrderIntoDB,
  deleteOrderFromDB,
};
