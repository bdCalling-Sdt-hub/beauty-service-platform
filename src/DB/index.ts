import colors from 'colors';
import { User } from '../app/modules/user/user.model';
import config from '../config';
import { USER_ROLES } from '../enums/user';
import { logger } from '../shared/logger';
import { profile } from 'winston';

const superUser = {
    name:"Candice Rondey", // put client last name
    role: USER_ROLES.SUPER_ADMIN,
    email: config.admin.email,
    password: config.admin.password,
    verified: true,
    permissions: [
    "Log Out",
    "Referral",
    "Bonus & Challenges",
    "Agreement",
    "Settings",
    "Supports",
    "Reports",
    "Services",
    "Subscriber",
    "Subscription Plan",
    "Users",
    "Analytics",
    "Manage Admin"
  ],

};

const seedSuperAdmin = async () => {
    const isExistSuperAdmin = await User.findOne({
        role: USER_ROLES.SUPER_ADMIN,
    });

    if (!isExistSuperAdmin) {
        await User.create(superUser);
        logger.info(colors.green('✔ Super admin created successfully!'));
    }
};

export default seedSuperAdmin;