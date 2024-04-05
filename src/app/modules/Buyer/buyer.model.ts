import { Schema, model } from 'mongoose';

import { Gender, UserRole } from '../User/user.constant';
import { userNameSchema } from '../User/user.model';
import { TBuyer } from './buyer.interface';


const buyerSchema = new Schema<TBuyer>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'User id is required'],
      // unique: true,
      ref: 'User',
    },

    name: {
      type: userNameSchema,
    },
    gender: {
      type: String,
      enum: {
        values: Gender,
        message: '{VALUE} is not a valid gender',
      },
    },
    role: {
      type: String,
      enum: {
        values: UserRole,
        message: '{VALUE} is not a valid role',
      },
      default : 'buyer'
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


export const BuyerModel = model<TBuyer>('Buyers', buyerSchema);
