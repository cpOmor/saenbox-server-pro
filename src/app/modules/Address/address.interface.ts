/* eslint-disable @typescript-eslint/no-explicit-any */

import { Types } from "mongoose";

export type TAddress = {
  user: Types.ObjectId;
  fullName: string;
  phoneNumber: string;
  division: string;
  city: string;
  area: string;
  postCode: string;
  address: string;
  label: string;
  isDeleted: boolean;
};