import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router();

router.post(
  '/create-order',
  // auth(USER_ROLE.admin, USER_ROLE.saenBoxSeller),
  // validateRequest(CourseValidations.createCourseValidationSchema),
  OrderControllers.createOrder,
);

router.get('/', OrderControllers.getAllOrder);
router.get('/:id', OrderControllers.getOrder);
router.get('/single-order/:id', OrderControllers.getSingleOrder);

router.put(
  '/',
  // auth(USER_ROLE.admin, USER_ROLE.saenBoxSeller, USER_ROLE.seller),
  // validateRequest(CourseValidations.updateCourseValidationSchema),
  OrderControllers.updateOrder,
);

router.delete(
  '/:id',
  // auth(USER_ROLE.saenBoxSeller, USER_ROLE.admin),
  OrderControllers.deleteOrder,
);

export const OrderRoutes = router;
