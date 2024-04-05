import { Schema, model } from 'mongoose';

import { Gender, UserRole } from '../User/user.constant';
import { userNameSchema } from '../User/user.model';
import { TSeller } from './seller.interface';


const sellerSchema = new Schema<TSeller>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'User id is required'],
      // unique: true,
      ref: 'User',
    },

    name: {
      type: userNameSchema,
      required: [true, 'Name is required'],
    },
    gender: {
      type: String,
      enum: {
        values: Gender,
        message: '{VALUE} is not a valid gender',
      },
      required: [true, 'Gender is required'],
    },
    role: {
      type: String,
      enum: {
        values: UserRole,
        message: '{VALUE} is not a valid role',
      },
      required: [true, 'Role is required'],
    },
    dateOfBirth: { type: Date },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    

    profileImg: { type: String, default: '' },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);


export const SellerModel = model<TSeller>('Sellers', sellerSchema);
