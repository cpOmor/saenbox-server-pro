import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { USER_ROLE } from '../User/user.constant';
import { BannerControllers } from './banner.controller';

const router = express.Router();

router.post(
  '/create-banner',
  auth(USER_ROLE.admin, USER_ROLE.saenBoxSeller),
  // validateRequest(CourseValidations.createCourseValidationSchema),
  BannerControllers.createBanner,
);

router.get('/', BannerControllers.getBanner);

router.patch(
  '/:id',
  auth(USER_ROLE.admin, USER_ROLE.saenBoxSeller, USER_ROLE.seller),
  // validateRequest(CourseValidations.updateCourseValidationSchema),
  BannerControllers.updateBanner,
);

router.delete(
  '/:id',
  auth(USER_ROLE.saenBoxSeller, USER_ROLE.admin),
  BannerControllers.deleteBanner,
);

export const BannerRoutes = router;
