import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BuyerServices } from './buyer.service';

const createBuyer = catchAsync(async (req, res) => {
  const result = await BuyerServices.createBuyerIntoDB(req.body.data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Registration is successful',
    data: result,
  });
});
// const getSingleAdmin = catchAsync(async (req, res) => {
//   const { id } = req.params;
//   const result = await createSellerIntoDB.getSingleAdminFromDB(id);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Admin is retrieved successfully',
//     data: result,
//   });
// });

// const getAllAdmins = catchAsync(async (req, res) => {
//   const result = await AdminServices.getAllAdminsFromDB(req.query);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Admins are retrieved successfully',
//     meta: result.meta,
//     data: result.result,
//   });
// });

const updateBuyer = catchAsync(async (req, res) => {
  const result = await BuyerServices.updateBuyer(req.params, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admin is updated successfully',
    data: result,
  });
});

// const deleteAdmin = catchAsync(async (req, res) => {
//   const { id } = req.params;
//   const result = await AdminServices.deleteAdminFromDB(id);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Admin is deleted successfully',
//     data: result,
//   });
// });

export const BuyerControllers = {
  createBuyer,
  // getAllAdmins,
  // getSingleAdmin,
  // deleteAdmin,
  updateBuyer,
};
