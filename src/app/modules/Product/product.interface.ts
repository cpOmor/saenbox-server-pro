/* eslint-disable @typescript-eslint/no-explicit-any */
import { Types } from 'mongoose';

export type TBasicInformation = {
  // basicInformation: {
    productName: string;
    gallery: string[];
    category: string;
    description: string;
  // };
};

export type TSpecification = {
  specification: {
    brand: string;
    weight: string;
    variant: [
      {
        image: string;
        price: number;
        name: string;
        stock: number;
      },
    ];
  };
};

export type TSalesInfo = {
  salesInfo: {
    quantity: number;
    salesPrice: number;
    regularPrice: number;
    minParches: number;
    maxParches: number;
  };
};

export type TShipping = {
  shipping: { weight: string; parcelSize: string; dangerousGoods: boolean };
};

export type TAttribute = {
  attribute: [{ name: string; title: string[] }];
  productName: string;
};

export type TRatings = {
  ratings: [{ user: Types.ObjectId; rating: string; title: string }];
};

export type TProduct = {
  seller: Types.ObjectId;
  basicInformation: TBasicInformation;
  specification: {
    brand: string;
    weight: string;
    variant: [
      {
        image: string;
        price: number;
        name: string;
        stock: number;
      },
    ];
  };
  salesInfo: TSalesInfo;
  shipping: TShipping;
  ratings: TRatings;
  isDraft : boolean
  // tag: string[];
};



export type TProductQuery = {
  meta: {
    total: number;
  };
  result: TProduct[];
}

export type TQuery = {
  [key: string]: unknown;
  createdAtMin?: Date;
  createdAtMax?: Date;
  // Add other query parameters as needed
}
