/* eslint-disable @typescript-eslint/no-explicit-any */
// import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { TBanner } from './banner.interface';
import { BannerModel } from './banner.model';

const createBannerIntoDB = async (payload: TBanner) => {
  const result = await BannerModel.create(payload);
  return result;
};

const getBannerFromDB = async () => {
  const result = await BannerModel.find();
  return result;
};

const updateBannerIntoDB = async (id: string, payload: Partial<TBanner>) => {
  const result = await BannerModel.findByIdAndUpdate(id, payload);
  return result;
};
const deleteBannerFromDB = async (id: string) => {
  const result = await BannerModel.findByIdAndDelete(id);

  if (!result) {
    throw new Error('Banner not found or already deleted');
  }

  return result;
};

export const BannerServices = {
  createBannerIntoDB,
  getBannerFromDB,
  updateBannerIntoDB,
  deleteBannerFromDB,
};
