import { model, Schema } from 'mongoose';
import { compare, hash } from 'bcryptjs';
import { IUserDoc, IUserModel } from '@schemas';
import { Status, UserRole } from '@enums';
import { logger } from '@utils';

const UserSchema = new Schema<IUserDoc>(
    {
        username: { type: String, required: true, unique: true, lowercase: true },
        email: { type: String, unique: true, lowercase: true, sparse: true },
        password: { type: String },
        profilePicture: { type: String },
        status: { type: String, enum: Object.values(Status), default: Status.ACTIVE }, //actions
        roles: {
            type: String,
            enum: Object.values(UserRole),
            default: UserRole.FAN,
        },
        vvipDetails: {
            joinedData: { type: Date },
            duration: { type: Number },
            endDate: { type: Date },
        },
        isEmailVerify: { type: Boolean, default: false },
        personVerify: { type: Boolean, default: false },
        isVerified: { type: Boolean, default: false },
        isDeleted: { type: Boolean, default: false },
        otpDetails: {
            type: {
                otp: { type: Number, default: 0 },
                isUsed: { type: Boolean, default: false },
                validTill: {
                    type: Date,
                    required: true,
                },
            },
            required: false,
        },
        twoFactorKey: { type: String },
        // otp: { type: Number, default: 0 },
        // otpValid: { type: Boolean, default: true },
    },
    {
        id: false,
        timestamps: true,
        toJSON: {
            getters: true,
        },
        toObject: {
            getters: true,
        },
    }
);

UserSchema.pre<IUserDoc>('save', async function (next) {
    if (!this.isModified('password')) return next();
    try {
        if (!this.password) {
            throw new Error('Password is undefined');
        }
        const saltRounds = Number(process.env.BCRYPT_ITERATIONS || 10);
        this.password = await hash(this.password, saltRounds);
        next();
    } catch (e) {
        logger.error('User model error in pre save hook', e);
        return next();
    }
});

UserSchema.method('comparePassword', async function comparePassword(password: string) {
    try {
        if (!this.password) {
            return false;
        }
        return await compare(password, this.password);
    } catch (e) {
        return false;
    }
});

export const User = model<IUserDoc, IUserModel>('User', UserSchema, 'users');
