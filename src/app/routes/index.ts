import { Router } from 'express';
import { AdminRoutes } from '../modules/Admin/admin.route';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { UserRoutes } from '../modules/User/user.route';
import { SellerRoutes } from '../modules/Sellers/seller.route';
import { BuyerRoutes } from '../modules/Buyer/buyer.route';
import { CategoryRoute } from '../modules/Categoric/categoric.route';
import { ProductRoutes } from '../modules/Product/product.route';
import { BannerRoutes } from '../modules/Banner/banner.route';
import { CardRoutes } from '../modules/Card/card.route';
import { OrderRoutes } from '../modules/Order/order.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/seller',
    route: SellerRoutes,
  },
  {
    path: '/buyer',
    route: BuyerRoutes,
  },
  {
    path: '/admins',
    route: AdminRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/category',
    route: CategoryRoute,
  },
  {
    path: '/product',
    route: ProductRoutes,
  },
  {
    path: '/banner',
    route: BannerRoutes,
  },
  {
    path: '/card',
    route: CardRoutes,
  },
  {
    path: '/order',
    route: OrderRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
