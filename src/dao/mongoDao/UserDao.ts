import { DeviceType, Id, IsActive, IUserDoc, IUserSessionDoc, OsType, UserId } from '@schemas';
// import { User, UserSession } from 'src/models';
import { User, UserSession } from '../../models';

class globalUserDao {
    async findUserById({ id }: Id): Promise<IUserDoc | null> {
        return User.findOne({ _id: id });
    }
    async findSessionById({
        id,
        userId,
        deviceType,
        osType,
        isActive,
    }: Id & UserId & DeviceType & OsType & IsActive): Promise<IUserSessionDoc | null> {
        return UserSession.findOne({ _id: id, userId, deviceType, osType, isActive, isDeleted: false });
    }
}

export default new globalUserDao();
