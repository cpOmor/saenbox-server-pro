/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import { UserRole, UserStatus } from './user.constant';
import { TUser, UserModel } from './user.interface';
import { TUserName } from './user.interface';

export const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'First Name is required'],
    trim: true,
    maxlength: [20, 'Name can not be more than 20 characters'],
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'Last Name is required'],
    maxlength: [20, 'Name can not be more than 20 characters'],
  },
});

const userSchema = new Schema<TUser, UserModel>(
  {
    // name: {
    //   type: userNameSchema,
    // },
    email: {
      type: String,
      // required: true,
      unique: true,
    },
    password: {
      type: String,
      // select: 0,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    passwordChangedAt: {
      type: Date,
    },
    role: {
      type: String,
      enum: UserRole,
      default : 'buyer'
    },
    status: {
      type: String,
      enum: UserStatus,
      default: 'in-progress',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

// generating full name
// userSchema.virtual('fullName').get(function () {
//   if (this?.name?.middleName === undefined) {
//     return this?.name?.firstName + ' ' + this?.name?.lastName;
//   }
//   return (
//     this?.name?.firstName +
//     ' ' +
//     this?.name?.middleName +
//     ' ' +
//     this?.name?.lastName
//   );
// });


export const User = model<TUser, UserModel>('User', userSchema);
