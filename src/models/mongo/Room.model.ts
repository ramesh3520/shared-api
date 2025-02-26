import { IRoomDoc, IRoomModel } from '@schemas/mongo/Room';
import { Schema, Types, model } from 'mongoose';
const roomSchema = new Schema<IRoomDoc>(
    {
        // chatRoomId: { type: Types.ObjectId, unique: true },
        chatRoomType: { type: String, unique: true, default: 'public' },
        modelId: { type: Types.ObjectId, required: true },
        contentViewtype: { type: String, required: true },
        status: { type: Boolean, required: true, default: true },
        viewersCount: { type: Number, required: true },
        startedAt: { type: Date, required: true, default: Date.now },
        endedAt: { type: String },
        message: {
            public: {
                isDeleted: { type: Boolean, default: false },
                messages: [
                    {
                        receiverId: { type: String },
                        message: { type: String },
                        messageType: { type: String, default: 'text' }, // sendtip,
                        isDeleted: { type: Boolean, default: false },
                        action: { type: String },
                        senderId: { type: String },
                    },
                ],
            },
            private: {
                isDeleted: { type: Boolean, default: false },
                messages: [
                    {
                        receiverId: { type: String },
                        message: { type: String },
                        messageType: { type: String, default: 'text' }, // sendtip,
                        isDeleted: { type: Boolean, default: false },
                        action: { type: String },
                        senderId: { type: String },
                    },
                ],
            },
        },
        isdelete: { type: Boolean, default: false },
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
const StreamRooms = model<IRoomDoc, IRoomModel>('Stream', roomSchema, 'streamRoom');

export default StreamRooms;
