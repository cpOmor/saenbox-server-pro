import { Types } from "mongoose";
import { TGender, TUserName } from "../User/user.interface";

export type TSeller = {
    user?: Types.ObjectId;
    name?: TUserName;
    email: string;
    gender?: TGender;
    dateOfBirth?: Date;
    role?: 'admin' | 'saenBoxSeller' | 'seller' | 'buyer';
    profileImg?: string;
    isDeleted: boolean;
  };