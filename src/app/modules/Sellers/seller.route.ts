import express from 'express';
import { SellerControllers } from './seller.controller';
// import { AdminControllers } from './seller.controller';
// import { updateAdminValidationSchema } from './seller.validation';

const router = express.Router();

router.post(
  '/create-seller',
  // auth( USER_ROLE.admin),
  SellerControllers.createSeller,
);


export const SellerRoutes = router;
