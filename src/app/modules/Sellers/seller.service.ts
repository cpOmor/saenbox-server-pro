/* eslint-disable @typescript-eslint/no-explicit-any */

import mongoose from 'mongoose';
import config from '../../config';
import { TUser } from '../User/user.interface';
import bcrypt from 'bcrypt';
import { User } from '../User/user.model';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { SellerModel } from './seller.model';


const createSellerIntoDB = async ( payload: TUser) => {
  
  // create a seller object
  const userData: Partial<TUser> = {};

  //set role
  userData.role = 'seller';

  // password is hashed
  const hashPassword = await bcrypt.hash(
    payload.password,
    Number(config.bcrypt_salt_rounds),
  );

  
  userData.email = payload.email;
  userData.name = payload.name;
  userData.password = hashPassword as string;
  // start transition
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    
    // create a user (transaction-1)
    const newUser = await User.create([userData], { session });
    //create a admin
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create admin');
    }

    // set  _id as user
    payload.user = newUser[0]._id; //reference _id

    // create a admin (transaction-2)
    const newSeller= await SellerModel.create([payload], { session });

    if (!newSeller.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create seller');
    }

    // completed transaction
    await session.commitTransaction();
    await session.endSession();

    return newSeller;
  } catch (err: any) {
    // reject or error transaction
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};

export const SellerServices = {
  createSellerIntoDB,
};
