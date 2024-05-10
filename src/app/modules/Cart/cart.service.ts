/* eslint-disable @typescript-eslint/no-explicit-any */
// import QueryBuilder from '../../builder/QueryBuilder';

import { TCart } from './cart.interface';
import { CartModel } from './cart.model';

const createCartIntoDB = async (payload: TCart) => {
  const isCart = await CartModel.findOne({ productId: payload.productId });

  if (isCart) {
    const result = await CartModel.findOneAndUpdate(
      {
        productId: payload.productId,
      },
      {
        quantity: payload?.quantity + isCart?.quantity,
      },
    );
    return result;
  } else {
    const result = await CartModel.create(payload);
    return result;
  }
};

const getCartFromDB = async (user: string) => {
  const result = await CartModel.find({ user });
  return result;
};

const updateCartIntoDB = async (payload: TCart) => {

  const result = await CartModel.findOneAndUpdate(
    {
      productId: payload.productId,
    },
    {
      quantity: payload?.quantity,
    },
  );
  return result;
};

const deleteCartFromDB = async (id: string) => {
  const result = await CartModel.findByIdAndDelete(id);

  if (!result) {
    throw new Error('Cart not found or already deleted');
  }

  return result;
};

export const CartServices = {
  createCartIntoDB,
  getCartFromDB,
  updateCartIntoDB,
  deleteCartFromDB,
};
