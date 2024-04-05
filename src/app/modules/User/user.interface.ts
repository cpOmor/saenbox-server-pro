/* eslint-disable no-unused-vars */
import { Model, Types } from 'mongoose';
import { USER_ROLE } from './user.constant';

export type TGender = { gender: 'male' | 'female' | 'other' };

export type TAddressType = {
  addressType: 'home' | 'office' | 'guest';
};

export type TAddress = {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  addressType: TAddressType;
};


export type TUserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TUser = {
  user?: Types.ObjectId;
  name?: TUserName;
  email: string;
  password: string;
  needsPasswordChange?: boolean;
  passwordChangedAt?: Date;
  gender?: TGender;
  address?: TAddress;
  role?: 'admin' | 'saenBoxSeller' | "seller" | 'buyer';
  dateOfBirth?: Date;
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
};

export interface UserModel extends Model<TUser> {
  //instance methods for checking if the user exist
  isUserExistsByCustomId(id: string): Promise<TUser>;
  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
  isJWTIssuedBeforePasswordChanged(
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number,
  ): boolean;
}

export type TUserRole = keyof typeof USER_ROLE;
