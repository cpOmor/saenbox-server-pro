import express from 'express';
import { BuyerControllers } from './buyer.controller';

// import { AdminControllers } from './seller.controller';
// import { updateAdminValidationSchema } from './seller.validation';

const router = express.Router();

router.post(
  '/create-buyer',
  // auth( USER_ROLE.admin),
  BuyerControllers.createBuyer,
);


export const BuyerRoutes = router;
