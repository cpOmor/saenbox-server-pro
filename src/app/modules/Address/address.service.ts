/* eslint-disable @typescript-eslint/no-explicit-any */
// import QueryBuilder from '../../builder/QueryBuilder';
import { TAddress } from './address.interface';
import { AddressModel } from './address.model';

const createAddressIntoDB = async (payload: TAddress) => {
  const result = await AddressModel.create(payload);
  return result;
};

const getAddressFromDB = async (user: string | unknown) => {
  const result = await AddressModel.find(user as any);
  return result;
};

const updateAddressIntoDB = async (id: string, payload: Partial<TAddress>) => {
  const result = await AddressModel.findByIdAndUpdate(id, payload);
  return result;
};
const deleteAddressFromDB = async (id: string) => {
  const result = await AddressModel.findByIdAndDelete(id);

  if (!result) {
    throw new Error('Address not found or already deleted');
  }

  return result;
};

export const AddressServices = {
  createAddressIntoDB,
  getAddressFromDB,
  updateAddressIntoDB,
  deleteAddressFromDB,
};
