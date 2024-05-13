import express from 'express';
import { ReviewControllers } from './review.controller';

const router = express.Router();

router.post(
  '/create-review',
  // auth(USER_ROLE.admin, USER_ROLE.saenBoxSeller),
  // validateRequest(CourseValidations.createCourseValidationSchema),
  ReviewControllers.createReview,
);

router.get('/', ReviewControllers.getAllReview);
router.get('/:id', ReviewControllers.getReview);
router.get('/single-review/:id', ReviewControllers.getSingleReview);

router.put(
  '/',
  // auth(USER_ROLE.admin, USER_ROLE.saenBoxSeller, USER_ROLE.seller),
  // validateRequest(CourseValidations.updateCourseValidationSchema),
  ReviewControllers.updateReview,
);

router.delete(
  '/:id',
  // auth(USER_ROLE.saenBoxSeller, USER_ROLE.admin),
  ReviewControllers.deleteReview,
);

export const ReviewRoutes = router;
