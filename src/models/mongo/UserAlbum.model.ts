import { UserAlbumAccess } from '@enums/UserAlbum.enum';
import { ObjectId } from '@schemas';
import { IUserAlbumDoc, IUserAlbumModel } from '@schemas/mongo/UserAlbum';
import { model, Schema } from 'mongoose';

const UserAlbumSchema = new Schema<IUserAlbumDoc>(
    {
        userId: { type: ObjectId, ref: 'User', required: true, index: 1 },
        albumName: { type: String, required: true },
        access: {
            type: String,
            enum: Object.values(UserAlbumAccess),
            default: UserAlbumAccess.UNPUBLISHED,
        },
        images: [
            {
                imageUrl: { type: String },
                blurImageUrl: { type: String },
                approved: { type: Boolean, default: false },
            },
        ],
        likes: [{ type: ObjectId }],
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

UserAlbumSchema.index({ albumName: 1 }, { collation: { locale: 'en', strength: 2 }, background: true });

export const UserAlbum = model<IUserAlbumDoc, IUserAlbumModel>('UserAlbum', UserAlbumSchema, 'useralbums');
