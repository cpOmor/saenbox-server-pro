import express from 'express';
import { CategoryController } from './categoric.controller';
// import validateRequest from '../../middlewares/validateRequest';

// import { AdminControllers } from './seller.controller';
// import { updateAdminValidationSchema } from './seller.validation';

const router = express.Router();

router.post('/create-category', CategoryController.createManiCategory);
router.put(
  '/create-sub-category',
  // auth( USER_ROLE.admin),
  CategoryController.updateSubCategory,
  // validateRequest(createAdminValidationSchema)
);

router.put(
  '/create-category',
  // auth( USER_ROLE.admin),
  CategoryController.updateCategory,
  // validateRequest(createAdminValidationSchema)
);

router.get(
  '/',
  // auth( USER_ROLE.admin),
  CategoryController.getCategory,
  // validateRequest(createAdminValidationSchema)
);

router.get(
  '/single-category',
  // auth( USER_ROLE.admin),
  CategoryController.getSingleCategory,
  // validateRequest(createAdminValidationSchema)
);

export const CategoryRoute = router;
