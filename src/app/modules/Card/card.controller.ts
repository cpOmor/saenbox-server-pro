import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CardServices } from './card.service';

const createCard = catchAsync(async (req, res) => {
  const result = await CardServices.createCardIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Card added successfully',
    data: result,
  });
});

const getCard = catchAsync(async (req, res) => {
  const result = await CardServices.getCardFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Card are retrieved successfully',
    data: result,
  });
});

const updateCard = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await CardServices.updateCardIntoDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Card is updated successfully',
    data: result,
  });
});

const deleteCard = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CardServices.deleteCardFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Card is deleted successfully',
    data: result,
  });
});


export const CardControllers = {
  createCard,
  getCard,
  updateCard,
  deleteCard,
};
