import config from '../config';
import { USER_ROLE } from '../modules/User/user.constant';
import { User } from '../modules/User/user.model';
import bcrypt from 'bcrypt';

const superAdmin = {
  id: 'A-0001',
  name: {
    firstName: 'Mr.',
    lastName: 'Admin',
  },
  email: 'admin@gmail.com',
  password: '123456',
  needsPasswordChange: false,
  role: USER_ROLE.admin,
  status: 'in-progress',
  isDeleted: false,
};

const seedSuperAdmin = async () => {
  //when database is connected, we will check is there any user who is admin
  const isSuperAdminExits = await User.findOne({ role: USER_ROLE.admin });

  const hashPassword = await bcrypt.hash(
    superAdmin.password,
    Number(config.bcrypt_salt_rounds),
  );
  superAdmin.password = hashPassword;
  try {
    if (!isSuperAdminExits) {
      await User.create(superAdmin);
    }
  } catch (error) {
    // console.log(error);
  }
};

export default seedSuperAdmin;
