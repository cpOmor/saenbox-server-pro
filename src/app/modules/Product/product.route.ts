import express from 'express';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.constant';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.post(
  '/add-product',
  // auth(USER_ROLE.admin, USER_ROLE.saenBoxSeller, USER_ROLE.seller),
  // validateRequest(CourseValidations.createCourseValidationSchema),
  ProductControllers.createProduct,
);

router.get('/', ProductControllers.getAllProducts);

router.get('/new-arrivals', ProductControllers.getNewProduct);

router.get('/seller/:title', ProductControllers.getProductBySeller);

router.get('/:id', ProductControllers.getSingleProduct);

router.patch(
  '/:id',
  auth(USER_ROLE.admin, USER_ROLE.saenBoxSeller, USER_ROLE.seller),
  // validateRequest(CourseValidations.updateCourseValidationSchema),
  ProductControllers.updateProduct,
);

router.delete(
  '/:id',
  // auth(USER_ROLE.saenBoxSeller, USER_ROLE.seller, USER_ROLE.admin),
  ProductControllers.deleteProduct,
);

export const ProductRoutes = router;
