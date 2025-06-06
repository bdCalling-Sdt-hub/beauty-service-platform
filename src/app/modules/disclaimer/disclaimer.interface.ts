import { Model } from "mongoose";

export type IDisclaimer = {
    content:string,
    type:"contact" | "privacy" | "terms" |"about" | "payout"
};

export type DisclaimerModel = Model<IDisclaimer, Record<string, unknown>>;