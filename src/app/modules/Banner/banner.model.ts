import { Schema, model } from 'mongoose';
import { TBanner } from './banner.interface';

const BannerSchema = new Schema<TBanner>({
  file: {
    type: String,
    required: [true, 'Image is required'],
  },

  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export const BannerModel = model<TBanner>('Banners', BannerSchema);
