import express from 'express';
import { CategoryController } from './categoric.controller';
// import validateRequest from '../../middlewares/validateRequest';

// import { AdminControllers } from './seller.controller';
// import { updateAdminValidationSchema } from './seller.validation';

const router = express.Router();

router.post(
  '/create-category',
  // auth( USER_ROLE.admin),
  CategoryController.createCategory,
  // validateRequest(createAdminValidationSchema)
);

router.post(
  '/create-main-category',
  // auth( USER_ROLE.admin),
  CategoryController.createMainCategory,
  // validateRequest(createAdminValidationSchema)
);

router.post(
  '/create-sub-category',
  // auth( USER_ROLE.admin),
  CategoryController.createSubCategory,
  // validateRequest(createAdminValidationSchema)
);

export const CategoryRoute = router;
