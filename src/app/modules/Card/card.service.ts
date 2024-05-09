/* eslint-disable @typescript-eslint/no-explicit-any */
// import QueryBuilder from '../../builder/QueryBuilder';

import { TCard } from "./card.interface";
import { CardModel } from "./card.model";

const createCardIntoDB = async (payload: TCard) => {
  const result = await CardModel.create(payload);
  return result;
};

const getCardFromDB = async () => {
  const result = await CardModel.find();
  return result;
};

const updateCardIntoDB = async (id: string, payload: Partial<TCard>) => {
  const result = await CardModel.findByIdAndUpdate(id, payload);
  return result;
};
const deleteCardFromDB = async (id: string) => {
  const result = await CardModel.findByIdAndDelete(id);

  if (!result) {
    throw new Error('Card not found or already deleted');
  }

  return result;
};

export const CardServices = {
  createCardIntoDB,
  getCardFromDB,
  updateCardIntoDB,
  deleteCardFromDB,
};
