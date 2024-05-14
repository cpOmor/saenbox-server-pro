import express from 'express';
import { CartControllers } from './cart.controller';

const router = express.Router();

router.post(
  '/create-cart',
  // auth(USER_ROLE.admin, USER_ROLE.saenBoxSeller),
  // validateRequest(CourseValidations.createCourseValidationSchema),
  CartControllers.createCart,
);

router.get('/:id', CartControllers.getCart);

router.put(
  '/',
  // auth(USER_ROLE.admin, USER_ROLE.saenBoxSeller, USER_ROLE.seller),
  // validateRequest(CourseValidations.updateCourseValidationSchema),
  CartControllers.updateCart,
);

router.delete(
  '/:id',
  // auth(USER_ROLE.saenBoxSeller, USER_ROLE.admin),
  CartControllers.deleteCart,
);

export const CartRoutes = router;
