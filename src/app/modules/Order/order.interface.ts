/* eslint-disable @typescript-eslint/no-explicit-any */

import { Types } from 'mongoose';

export type TOrder = {
  user: Types.ObjectId;
  product: Types.ObjectId;
  quantity : number;
  isDeleted: boolean;
};


