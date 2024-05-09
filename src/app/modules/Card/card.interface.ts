/* eslint-disable @typescript-eslint/no-explicit-any */

import { Types } from 'mongoose';

export type TCard = {
  user: Types.ObjectId;
  product: Types.ObjectId;
  quantity : number;
  isDeleted: boolean;
};


