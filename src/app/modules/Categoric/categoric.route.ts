import express from 'express';
import { CategoryController } from './categoric.controller';
import validateRequest from '../../middlewares/validateRequest';
import { mainCategoryValidationSchema } from './categoric.validation';
// import validateRequest from '../../middlewares/validateRequest';

// import { AdminControllers } from './seller.controller';
// import { updateAdminValidationSchema } from './seller.validation';

const router = express.Router();

router.post('/create-main-category', CategoryController.createManiCategory);


router.put(
  '/create-sub-category',
  // auth( USER_ROLE.admin),
  CategoryController.updateSubCategory,
  // validateRequest(createAdminValidationSchema)
);

router.put(
  '/create-category',
  // auth( USER_ROLE.admin),
  validateRequest(mainCategoryValidationSchema),
  CategoryController.createCategory,
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

router.get(
  '/sub-category',
  // auth( USER_ROLE.admin),
  CategoryController.getSubCategory,
  // validateRequest(createAdminValidationSchema)
);

export const CategoryRoute = router;
