import { Schema, model } from 'mongoose';
import { TAddress } from './address.interface';

const AddressSchema = new Schema<TAddress>({
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'You are not authenticate user'],
  },
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required'],
  },
  division: {
    type: String,
    required: [true, 'Division is required'],
  },
  city: {
    type: String,
    required: [true, 'City is required'],
  },
  area: {
    type: String,
    required: [true, 'Area is required'],
  },
  postCode: {
    type: String,
    required: [true, 'Post code is required'],
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
  },
  label: {
    type: String,
    required: [true, 'Label is required'],
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export const AddressModel = model<TAddress>('Addresses', AddressSchema);
