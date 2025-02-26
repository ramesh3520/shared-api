import { UserAlbumAccess } from '@enums/UserAlbum.enum';
import { ObjectId } from '@schemas';
import { IStudioAlbumDoc, IStudioAlbumModel } from '@schemas/mongo/StudioAlbum';
import { model, Schema } from 'mongoose';

const StudioAlbumSchema = new Schema<IStudioAlbumDoc>(
    {
        studioId: { type: ObjectId, ref: 'User', required: true, index: 1 },
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
        likes: [{ type: ObjectId, default: [] }],
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

export const StudioAlbum = model<IStudioAlbumDoc, IStudioAlbumModel>('StudioAlbum', StudioAlbumSchema, 'studioalbums');
