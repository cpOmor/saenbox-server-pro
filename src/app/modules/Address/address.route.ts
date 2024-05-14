import express from 'express';
import { AddressControllers } from './address.controller';

const router = express.Router();

router.post(
  '/create-address',
  // auth(USER_ROLE.admin, USER_ROLE.saenBoxSeller),
  // validateRequest(CourseValidations.createCourseValidationSchema),
  AddressControllers.createAddress,
);

router.get('/:user', AddressControllers.getAddress);

router.patch(
  '/:id',
  // auth(USER_ROLE.admin, USER_ROLE.saenBoxSeller, USER_ROLE.seller),
  // validateRequest(CourseValidations.updateCourseValidationSchema),
  AddressControllers.updateAddress,
);

router.delete(
  '/:id',
  // auth(USER_ROLE.saenBoxSeller, USER_ROLE.admin),
  AddressControllers.deleteAddress,
);

export const AddressRoutes = router;
