/* eslint-disable @typescript-eslint/no-explicit-any */

import { TOrder } from './order.interface';
import { OrderModel } from './order.model';

const createOrderIntoDB = async (payload: TOrder) => {
  const result = await OrderModel.create(payload);
  return result;
};

const getOrderFromDB = async () => {
  const result = await OrderModel.find();
  return result;
};

const updateOrderIntoDB = async (id: string, payload: Partial<TOrder>) => {
  const result = await OrderModel.findByIdAndUpdate(id, payload);
  return result;
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
  getOrderFromDB,
  updateOrderIntoDB,
  deleteOrderFromDB,
};
