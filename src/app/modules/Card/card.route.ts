import express from 'express';
import { CardControllers } from './card.controller';

const router = express.Router();

router.post(
  '/create-card',
  // auth(USER_ROLE.admin, USER_ROLE.saenBoxSeller),
  // validateRequest(CourseValidations.createCourseValidationSchema),
  CardControllers.createCard,
);

router.get('/', CardControllers.getCard);

router.patch(
  '/:id',
  // auth(USER_ROLE.admin, USER_ROLE.saenBoxSeller, USER_ROLE.seller),
  // validateRequest(CourseValidations.updateCourseValidationSchema),
  CardControllers.updateCard,
);

router.delete(
  '/:id',
  // auth(USER_ROLE.saenBoxSeller, USER_ROLE.admin),
  CardControllers.deleteCard,
);

export const CardRoutes = router;
