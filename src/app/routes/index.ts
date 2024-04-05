import { Router } from 'express';
import { AdminRoutes } from '../modules/Admin/admin.route';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { UserRoutes } from '../modules/User/user.route';
import { SellerRoutes } from '../modules/Sellers/seller.route';
import { BuyerRoutes } from '../modules/Buyer/buyer.route';
import { CategoryRoute } from '../modules/Categoric/categoric.route';

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
