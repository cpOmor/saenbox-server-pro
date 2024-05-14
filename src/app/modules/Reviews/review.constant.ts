import { TDateFormatOptions } from './review.interface';

export const OrderStatus = [
  'pending',
  'processing',
  'shipped',
  'completed',
  'cancelled',
];

export const orderFields = [
  'pending',
  'processing',
  'shipped',
  'completed',
  'cancelled',
];

export const options = {
  year: 'numeric',
  month: 'short',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
};

export const thisTime = () => {
  const date = new Date();
  const oderDate = date.toLocaleDateString(
    'en-GB',
    options as TDateFormatOptions,
  );

  return oderDate;
};
