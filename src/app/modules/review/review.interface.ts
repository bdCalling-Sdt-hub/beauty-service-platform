import { Model, Types } from "mongoose";

export type IReview = {
    user: Types.ObjectId;
    artist: Types.ObjectId;
    order: Types.ObjectId;
    comment?: string;
    rating: number;
    tip?: number;
    trxId?: string;
    createdAt?: Date;
    service:Types.ObjectId;
}

export type ReviewModel = Model<IReview>;